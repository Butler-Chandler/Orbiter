import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'orbit-form',
  templateUrl: './orbit-form.component.html',
  styleUrls: ['./orbit-form.component.css']
})
export class OrbitFormComponent implements OnInit {
  @Input() celestialOrbit;
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.celestialOrbit.orbitForm = this.fb.group({
          orbitalSpeed: ['', Validators.min(0)],
          rotationalSpeed: ['', Validators.min(0)],
        },{});
  }

  onSubmit(){
    this.celestialOrbit.submitted = true;
    if(this.celestialOrbit.orbitForm.valid){
      if(this.celestialOrbit.orbitForm.value.orbitalSpeed >= 0){
        this.celestialOrbit.orbitalSpeed = this.celestialOrbit.orbitForm.value.orbitalSpeed;
      }
      if(this.celestialOrbit.orbitForm.value.rotationalSpeed >=0){
        this.celestialOrbit.rotationalSpeed = this.celestialOrbit.orbitForm.value.rotationalSpeed;
      }
    }
  }
}
