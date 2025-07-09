class MockProviderA {
  async send(email) {
    console.log("MockProviderA sending:", email);
    return true; // Simulate successful send
  }
}

module.exports = MockProviderA; // ✅ Export the class directly
