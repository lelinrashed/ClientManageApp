import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Observable<any[]>;

  constructor(
    public af: AngularFireDatabaseModule
  ) {
    this.clients = af.collection('clients').valueChanges();
  }

  getClients() {
    return this.clients;
  }


}
