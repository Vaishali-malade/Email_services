class MockProviderB {
  async send(email) {
    console.log("MockProviderB sending:", email);
    return false;
  }
}

module.exports = MockProviderB;
