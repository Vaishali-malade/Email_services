class EmailService {
  constructor(providers) {
    this.providers = providers;
    this.statusMap = new Map();
  }

  async send(email) {
    for (const provider of this.providers) {
      try {
        const result = await provider.send(email);
        if (result) {
          this.statusMap.set(email.id, "success");
          return true;
        }
      } catch (err) {
        // Log and try next provider
        console.error("Provider failed:", err.message);
      }
    }
    this.statusMap.set(email.id, "failed");
    return false;
  }

  getStatus(emailId) {
    return this.statusMap.get(emailId) || "unknown";
  }
}

module.exports = EmailService; // ✅ Correct export
