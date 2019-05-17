import Store from './Class/Store';

// Require custom-event-polyfill for IE9-11
export default class EventBus {
  constructor() {
    if (!this.init()) return false;
  }

  init() {
    this.initializedAt = Date.now();

    this.selectors = {
      proxy: 'jsEventBusProxy',
    };

    this.body = document.querySelector('body');
    this.proxy = this.setupProxy();

    this.store = new Store();
    return true;
  }

  setupProxy() {
    const proxyEl = document.querySelector(`.${this.selectors.proxy}-${this.initializedAt}`);

    if (!proxyEl) {
      const newProxy = document.createElement('div');
      newProxy.classList.add(`${this.selectors.proxy}-${this.initializedAt}`);
      this.body.append(newProxy);
    }
  }

  // Public methods
  create() {}

  subscribe() {}

  unsubscribe() {}

  broadcast() {}

  emit() {}

  publish() {}

  enterChannel() {}

  leaveChannel() {}

  createChannel() {}

  observe() {}

  snapshot() {}
}
