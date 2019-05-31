import {inject} from 'aurelia-framework';
import hotkeys from 'hotkeys-js';

@inject(Element)
export class HotkeyCustomAttribute {
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue, oldValue) {
    let targetElement = this.element;
    hotkeys(newValue, function(event, handler) {
      // Prevent the default events under WINDOWS systems
      event.preventDefault();
      //DEBUG INFO console.log('you pressed ' + newValue + ' which runs "' + targetElement + '"');
      targetElement.click();
    });
  }
}


