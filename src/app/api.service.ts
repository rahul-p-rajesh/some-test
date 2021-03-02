import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

    constructor(private http: HttpClient){}

    getContacts(){
        return this.http.get('https://localhost:44384/api/contacts');
        }

    postContact(contact:any){
        this.http.post('https://localhost:44384/api/contacts',contact).subscribe(res=>{
         console.log(res)
        })
    }
    putContact(contact:any) {
        this.http.put(`https://localhost:44384/api/contacts/put`, contact).subscribe(res => {
            console.log(res)
        })
    }

    deleteContact(contact:any) {
        this.http.delete(`https://localhost:44384/api/contacts/${contact.name}`, contact).subscribe(res => {
            console.log(res)
        })
    }
}
