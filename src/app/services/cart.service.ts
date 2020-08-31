import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private fs: AngularFirestore, private as : AuthenticationService) { }

  addToCart(Product){
    this.fs.collection(`user/${ this.as.userId}/cart`).add(Product);
  }
}
