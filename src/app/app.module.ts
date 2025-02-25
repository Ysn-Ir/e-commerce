import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    PanierComponent,
    HeaderComponent,
  FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
