import { Component } from '@angular/core';
import { item } from '../assets/item'; 

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'] 
})
export class PanierComponent {
  basket: any[] = [];
  total: number = 0;

  constructor() {
    this.loadBasketFromLocalStorage();
    this.calcTotal();  
  }

  loadBasketFromLocalStorage() {
    const storedBasket = localStorage.getItem('panier');
    if (storedBasket !== null) {
      this.basket = JSON.parse(storedBasket);
    }
  }

  calcTotal() {
    let total = 0;
    this.basket.forEach(item => {
      total += item.price * item.quantity;
    });
    this.total = total; 
   }

  delete(item: item) {
    this.basket = this.basket.filter(basketItem => basketItem !== item); 
    this.calcTotal();
    localStorage.setItem('panier', JSON.stringify(this.basket));
  }

  increaseQuantity(item: any) {
    const basketItem = this.basket.find(basketItem => basketItem.id === item.id); 
    if (basketItem) {
      console.log("the stock is "+basketItem.stock)
      if(basketItem.quantity<basketItem.stock)
         basketItem.quantity += 1; 
      this.calcTotal(); 
      localStorage.setItem('panier', JSON.stringify(this.basket)); 
    }
  }
  decreaseQuantity(item: any) {
    const basketItem = this.basket.find(basketItem => basketItem.id === item.id); 
    if (basketItem) {
      if(basketItem.quantity>0 )
      basketItem.quantity -= 1;
      
      this.calcTotal(); 
      localStorage.setItem('panier', JSON.stringify(this.basket)); 
    }
  }
  
}  
