import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent{

    contact:any = {}

    constructor(private api:ApiService){}
    
    post(contact:any){
        this.api.postContact(contact)
    }
}