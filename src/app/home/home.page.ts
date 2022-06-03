import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
contacts: any =[];
  constructor(private storageservice: ContactService) {}

ngOnInit(){
    this.getAllContacts();
}
getAllContacts(){
  this.storageservice.listAll().then((res) => {
    console.log(res);
    this.contacts = res;
  })
}

}
