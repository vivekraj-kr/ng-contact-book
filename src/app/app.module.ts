import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddContactComponent } from './add-contact/add-contact.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    NotFoundComponent,
    ContactFormComponent,
    AddContactComponent,
    EditContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
