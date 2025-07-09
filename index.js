
const EmailService = require("./emailservice");
const MockProviderA = require("./providers/mockproviderA");
const MockProviderB = require("./providers/mockproviderB");

const emailService = new EmailService([
  new MockProviderA(),
  new MockProviderB(),
]);

(async () => {
  const email = {
    id: "email-123",
    to: "user@example.com",
    subject: "Test Email",
    body: "This is a test email.",
  };

  const result = await emailService.send(email);
  console.log("Email status:", emailService.getStatus(email.id));
})();
