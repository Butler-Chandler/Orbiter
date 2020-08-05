import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { PlanetService } from './services/planet.service';
import { CelestialOrbit} from './domain/celestial-orbit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'Orbiter';
  celestialOrbit: CelestialOrbit = new CelestialOrbit();
  isExpanded = true;
  isShowing = false;
  showSubmenu: boolean = false;
  orbitForm: FormGroup;
  constructor(private planetService: PlanetService) { }

  ngOnInit(){
    this.getRandomPlanet();
  }

  getRandomPlanet(){
    this.planetService.getPlanet().subscribe(res => {
      this.celestialOrbit.planet = res;
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
}
