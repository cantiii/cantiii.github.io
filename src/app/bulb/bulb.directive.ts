import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appBulb]'
})
export class BulbDirective implements OnInit{
  bulbOn = "../assets/fullbulb.png";
  bulbOff = "../assets/lightbulb.png";
  @HostBinding('src') src: string = this.bulbOff;

  constructor() { }

  ngOnInit() {
    this.src = this.bulbOff;
  }

  @HostListener('mouseover') mouseover(eventData: Event){
    this.src = this.bulbOn;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.src = this.bulbOff;

  }
}
