import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { PlanetService } from './services/planet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'Orbiter';
  animatePlanet = true;
  orbitalSpeed = 1;
  rotationalSpeed = 1;
  isExpanded = true;
  isShowing = false;
  showSubmenu: boolean = false;
  planet: any = {};
  orbitForm: FormGroup;
  submitted = false;
  constructor(private planetService: PlanetService, private fb: FormBuilder) { }

  ngOnInit(){
    this.getRandomPlanet();
    this.orbitForm = this.fb.group({
      orbitalSpeed: ['', Validators.min(0)],
      rotationalSpeed: ['', Validators.min(0)],
    },{});
  }

  getRandomPlanet(){
    this.planetService.getPlanet().subscribe(res => {
      this.planet = res;
    });
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    if(this.orbitForm.valid){
      this.orbitalSpeed = this.orbitForm.value.orbitalSpeed;
      this.rotationalSpeed = this.orbitForm.value.rotationalSpeed;
    }
  }
}
