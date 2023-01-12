import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PonyListComponent } from './pony-list/pony-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { FavouritePoniesComponent } from './favourite-ponies/favourite-ponies.component';
import { DetailedPonyInformationComponent } from './pony-list/detailed-pony-information/detailed-pony-information.component';
import { AirtableAuthInterceptor } from './airtable-auth-inerceptor.interceptor';

export const BASE_URL = new InjectionToken<string>('BaseUrl');
export const AIRTABLE_PAT = new InjectionToken<string>('AirtablePat');

@NgModule({
  declarations: [
    AppComponent,
    PonyListComponent,
    FavouritePoniesComponent,
    DetailedPonyInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCardModule,

  ],
  providers: [
    {
      provide: BASE_URL,
      useValue: 'database url',
    },
    {
      provide: AIRTABLE_PAT,
      useValue: 'database pat',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AirtableAuthInterceptor,
      multi: true,
    },
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
