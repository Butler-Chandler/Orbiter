import { Directive, ElementRef, Input, OnInit, Renderer2, SimpleChange } from '@angular/core';

@Directive({
  selector:'[planet]'
})

  export class PlanetDirective implements OnInit{

    @Input('planetColor') planetColor: string;
    @Input('planetRadius') planetRadius: string;
    @Input('rotationSpeed') rotationSpeed: string;

    constructor(private er: ElementRef, private renderer: Renderer2){
      renderer.setStyle(er.nativeElement,'-webkit-animation-iteration-count','infinite');
      renderer.setStyle(er.nativeElement,'-webkit-animation-timing-function','linear');
      renderer.setStyle(er.nativeElement,'-webkit-animation-name','rotate-planet');
      renderer.setStyle(er.nativeElement,'border','5px solid rgba(29,161,242,0.2)');
      renderer.setStyle(er.nativeElement,'border-left-color', 'rgb(29,161,242)');
  }

  ngOnChanges(){
    this.updateView();
  }

  ngOnInit() {
    this.updateView();
  }

  updateView() {
    let planetColor = `${this.planetColor}`;
    this.renderer.setStyle(this.er.nativeElement,'background-color', planetColor);

    let planetRadius = `${this.planetRadius}`;
    this.renderer.setStyle(this.er.nativeElement,'height', planetRadius);
    this.renderer.setStyle(this.er.nativeElement,'width', planetRadius);
    this.renderer.setStyle(this.er.nativeElement,'border-radius', '50%');

    let rotationalSpeed = `${this.rotationSpeed}s`;
    this.renderer.setStyle(this.er.nativeElement,'-webkit-animation-duration',rotationalSpeed);
  }



}
