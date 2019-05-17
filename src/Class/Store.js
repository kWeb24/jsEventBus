export default class Store {
  constructor() {
    if (!this.init()) return false;
  }

  init() {
    this.state = {
      channels: {},
      emitters: {},
      listeners: {},
    };

    return true;
  }
}
