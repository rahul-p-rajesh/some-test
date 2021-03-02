import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import{ FormsModule } from '@angular/forms';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ContactsComponent } from './contacts.component';

import {MatGridListModule} from '@angular/material/grid-list';

import { RouterModule } from '@angular/router'

const routes = [
  { path: '', component: ContactComponent},
  { path: 'createcontact', component: ContactComponent},
  { path: 'contactslist', component: ContactsComponent}

];



@NgModule({
  declarations: [
    AppComponent, ContactComponent, ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
