import EventBus from '../../../src/EventBus';

export default class Example {
  constructor() {
    if (!this.init()) return false;
    this.EventBus = new EventBus();
  }

  init() {
    this.selectors = {
      clickButton: 'example-click',
    };

    this.clickButton = document.querySelector(`.${this.selectors.clickButton}`);

    if (!this.clickButton) return false;

    return true;
  }
}
