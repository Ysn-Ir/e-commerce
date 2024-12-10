import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [{path:'',component:ProduitsComponent},
  {path:'Panier',component:PanierComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
