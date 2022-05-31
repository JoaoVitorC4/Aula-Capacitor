import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.page.html',
  styleUrls: ['./contact-add.page.scss'],
})
export class ContactAddPage implements OnInit {
  contact: Contact;
  key: string;
  constructor() { }

  ngOnInit() {
  }

}
