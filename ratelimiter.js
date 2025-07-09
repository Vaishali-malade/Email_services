module.exports.RateLimiter = class RateLimiter {
  constructor(maxRequests, intervalMs) {
    this.maxRequests = maxRequests;
    this.interval = intervalMs;
    this.queue = [];
  }
allow() {
    const now = Date.now();
    this.queue = this.queue.filter((time) => now - time < this.interval);
    if (this.queue.length < this.maxRequests) {
      this.queue.push(now);
      return true;
    }
    return false;
  }
};