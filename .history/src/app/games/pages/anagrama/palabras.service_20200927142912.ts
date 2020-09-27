import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Palabra } from 'src/app/class/palabra';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  ItemsCollection: AngularFirestoreCollection<Palabra>;
  ItemDoc: AngularFirestoreDocument<Palabra>;
  Items: Observable<Palabra[]>;

  public cantCarritoItems: number;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('palabras');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Palabra;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Palabra) {
    this.ItemDoc = this.db.doc(`palabras/${Item.id}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Palabra) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Palabra) {
    this.ItemDoc = this.db.doc(`palabras/${Item.id}`);
    this.ItemDoc.update(Item);
  }

}
