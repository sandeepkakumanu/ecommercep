import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/productsinterface';
import { ProductsService } from '../../products.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  add : number= -1;
Products :Array<any> =[
  
]
  constructor(private ps :ProductsService, private cart: CartService) { }

  ngOnInit() {
    this.ps.getAllProducts().subscribe((data) =>(this.Products = data));
      
    
  }
  addToCart(index){
    this.add = +index
      console.log('Added',this.Products[index])
  }
  buy(amount){
    let sp = this.Products[this.add];

    let data ={
      name : sp.Name,
      price : sp.Price,
      amount : amount

    };
    this.cart
    .addToCart(data)
    // .then(()=>(this.add = -1))
    // .catch((err)=> console.log(err));
  }
}


  