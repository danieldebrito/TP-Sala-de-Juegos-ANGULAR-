import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Casaca } from 'src/app/class/casaca';

@Injectable({
  providedIn: 'root'
})
export class CasacasService {

  ItemsCollection: AngularFirestoreCollection<Casaca>;
  ItemDoc: AngularFirestoreDocument<Casaca>;
  Items: Observable<Casaca[]>;

  public cantCarritoItems: number;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('casacas');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Casaca;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Casaca) {
    this.ItemDoc = this.db.doc(`casacas/${Item.id}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Casaca) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Casaca) {
    this.ItemDoc = this.db.doc(`casacas/${Item.id}`);
    this.ItemDoc.update(Item);
  }
}
