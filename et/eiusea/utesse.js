class ProxyManager {
  constructor() {
    this._proxy = null;
  }

  set proxy(value) {
    if (this.validateProxy(value)) {
      this._proxy = value;
    } else {
      throw new Error('Invalid proxy value');
    }
  }

  get proxy() {
    return this._proxy;
  }

  validateProxy(value) {
    // Perform necessary validation checks on the proxy value
    // For example, check if it's a valid URL or IP address
    const isValid = /* validation logic */;
    return isValid;
  }
}

// Usage
const manager = new ProxyManager();
try {
  manager.proxy = proxy; // Assuming 'proxy' is a valid proxy value
} catch (error) {
  console.error(error.message);
}
