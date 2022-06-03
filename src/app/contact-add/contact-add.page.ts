import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.page.html',
  styleUrls: ['./contact-add.page.scss'],
})
export class ContactAddPage implements OnInit {
  model: any = [];
  key: string;
  constructor(private storageService: ContactService,
    private toast :ToastController) { }

  ngOnInit() {
  }

  save(){
    this.storageService.insert(this.model).then(() => {
      console.log("SALVO COM SUCESSO!");
    }).catch(() =>{
      console.log("ERRO");
    })

  }

}
