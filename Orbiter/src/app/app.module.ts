import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetDirective } from './directives/PlanetDirective.directive';
import { PlanetAnimationDirective } from './directives/AnimationDirective.directive';
import { CelestialOrbitComponent } from './celestial-orbit/celestial-orbit.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { OrbitFormComponent } from './orbit-form/orbit-form.component';



@NgModule({
  declarations: [
    AppComponent,
    PlanetDirective,
    PlanetAnimationDirective,
    CelestialOrbitComponent,
    SideNavComponent,
    OrbitFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
