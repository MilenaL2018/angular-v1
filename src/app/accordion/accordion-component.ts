import {Component} from '@angular/core';

/**
 * @title Basic expansion panel
 */

 interface AccordionInfo {
  title: string;
  detail: string;
}

const DATA: AccordionInfo[] = [
  {
    title: 'Fruit',
    detail: 'Detail'
  }
];

@Component({
  selector: 'accordion',
  templateUrl: 'accordion-component.html',
  styleUrls: ['accordion-component.sass'],
})
export class Accordion {
  panelOpenState = false;
}