import { Component, OnInit } from '@angular/core';

import { ContactFormService } from '../contactform.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactFormService],
})
export class ContactsComponent implements OnInit {
  // contactList: { id: number; name: string; email: string; number: number }[] = [
  //   { id: 1, name: 'John', email: 'john@gmail.com', number: 123456789 },
  //   { id: 2, name: 'Doe', email: 'doe@gmail.com', number: 123456780 },
  // ];

  //contactFormService = new ContactFormService();
  //contactList = this.contactFormService.contactFormData().conatcts;

  contactList: { id: number; name: string; email: string; number: number }[] =
    [];

  constructor(private contactFormService: ContactFormService) {}

  ngOnInit(): void {
    this.contactList = this.contactFormService.contactFormData().contacts;
  }
}
