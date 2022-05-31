import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ContactList } from '../models/contact-list.model';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  insert(contact: Contact){
    let key = this.datepipe.transform(new Date(),"ddMMyyyyHHmmss")
    return this.storage.set(key, contact);
  }

  remove(key){
    return this.storage.remove(key);
  }

  listAll(){
    let contacts: ContactList[] = []

    return this.storage.forEach((value: Contact, key: string, n: Number) => {
      let contact = new ContactList();
      contact.key = key;
      contact.contact = value;
      contacts.push(contact);
    }).then(() => {
      return Promise.resolve(contacts);
    }).catch((error)=>{
      return Promise.reject(error);
    })
  }


}
