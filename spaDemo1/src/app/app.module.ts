import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { LaptopComponent } from './components/laptop.component';
import { CameraComponent } from './components/camera.component';
import { ClothesComponent } from './components/clothes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LaptopComponent,
    CameraComponent,
    ClothesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'laptops', component: LaptopComponent },
      { path: 'cameras', component: CameraComponent },
      { path: 'clothes', component: ClothesComponent },
    ]),
  ],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {}
