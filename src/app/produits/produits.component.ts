import { Component, OnInit } from '@angular/core';
import { item } from '../assets/item';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  items: any[] = [];
  panier: any[] = [];

  constructor(private store: ProductsService) {}

  ngOnInit() {
    this.store.getProducts().subscribe(items => {
      this.items = items;
    });

    const storedPanier = localStorage.getItem("panier");
    this.panier = storedPanier ? JSON.parse(storedPanier) : [];
  }
  checkIfExist(item:any):boolean{
    for(let i=0;i<this.panier.length;i++){
      if(item.id===this.panier[i].id){
        return false;
      }
    }
    return true;
  }
  addtobasket(item: any) {
    if (item && this.checkIfExist(item)) {
      this.panier.push(item);
      localStorage.setItem("panier", JSON.stringify(this.panier));
    }
  }
}
