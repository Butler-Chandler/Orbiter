import { Directive, ElementRef, Input, OnInit, Renderer2, SimpleChange } from '@angular/core';

@Directive({
selector:'[planetAnimation]'
})

  export class PlanetAnimationDirective implements OnInit{

  @Input('animate') shouldAnimate: boolean;
  @Input('orbitSpeed') orbitSpeed: number;
  @Input('rotationSpeed') rotationalSpeed: number;

constructor(private er: ElementRef, private renderer: Renderer2){
    renderer.setStyle(er.nativeElement,'width','400px');
    renderer.setStyle(er.nativeElement,'height','400px');
    renderer.setStyle(er.nativeElement,'top','172px');
    renderer.setStyle(er.nativeElement,'left','140px');
    renderer.setStyle(er.nativeElement,'border-radius','50%');
    renderer.setStyle(er.nativeElement,'-webkit-animation-iteration-count','infinite');
    renderer.setStyle(er.nativeElement,'-webkit-animation-timing-function','linear');
    renderer.setStyle(er.nativeElement,'-webkit-animation-name','orbit');
  }

  ngOnChanges(){
    this.updateAnimation();
  }

  ngOnInit() {
    this.updateAnimation();
  }

  updateAnimation(){
    let orbitSpeed = `${this.orbitSpeed}`;
    console.log(this.shouldAnimate);
    if(this.shouldAnimate){
      console.log("SET ORBIT SPEED TO ORBIT SPEED");
      this.renderer.setStyle(this.er.nativeElement,'-webkit-animation-duration',orbitSpeed);
    } else{
      console.log("SET ORBIT SPEED TO 0");
      this.renderer.setStyle(this.er.nativeElement,'-webkit-animation-duration','0s');
    }
  }

}
