import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'contacts',
    templateUrl: './contacts.component.html'
})
export class ContactsComponent{

    contact:any = {}
    contacts:any

    constructor(private api: ApiService){}

    ngOnInit(){
        this.api.getContacts().subscribe(res=> {
            this.contacts = res
        })
    }
    


    putContact(contact:any){
        this.api.putContact(contact)
    }

    deleteContact(contact:any){
        this.api.deleteContact(contact)
    }
}