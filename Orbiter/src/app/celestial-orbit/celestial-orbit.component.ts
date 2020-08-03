import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PlanetService } from '../services/planet.service';

@Component({
  selector: 'app-celestial-orbit',
  templateUrl: './celestial-orbit.component.html',
  styleUrls: ['./celestial-orbit.component.css']
})
export class CelestialOrbitComponent {
  @Input() animatePlanet;
  @Input() orbitalSpeed;
  @Input() rotationalSpeed;
  @Input() planet;
  constructor() { }

}
