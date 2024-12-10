import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  items: any[] = [
    {
      id: 1,
      name: 'PlayStation 4',
      price: 350,
      img: "https://m.media-amazon.com/images/I/61DEI+SDg0L.jpg",
      description: "The PlayStation 4 is a home video game console developed by Sony. It was released in 2013, offering a wide range of games and media content.",
      category: "Console",
      stock: 20,
      quantity:1
    },
    {
      id: 2,
      name: 'PlayStation 5',
      price: 500,
      img: "https://ae01.alicdn.com/kf/S8ee5cd3868ab4f1ba714b28a28f01ddbp.jpg",
      description: "The PlayStation 5 is Sony's latest generation console, featuring faster load times, incredible graphics, and a new controller with adaptive triggers.",
      category: "Console",
      stock: 15,
      quantity:1
    },
    {
      id: 3,
      name: 'PlayStation 3',
      price: 150,
      img: "https://www.dealicash.fr/images/tag-0/console-sony-playstation-3-ps3-fat-80go-avec-une-manette-728-1-xl.webp",
      description: "The PlayStation 3 is an older gaming console from Sony. Despite being discontinued, it remains a great option for budget gamers.",
      category: "Console",
      stock: 30,
      quantity:1
    },
    {
      id: 4,
      name: 'PlayStation 1',
      price: 100,
      img: "https://www.cashconverters.co.uk/globalassets/catalogs/d9754055-accb-47c7-9e07-b21500be0465.jpg?width=800&height=600&rsampler=bicubic&compand=true&bgcolor=255,255,255,55&rmode=pad",
      description: "The PlayStation 1 is Sony's first gaming console. It revolutionized gaming in the 90s and remains a nostalgic piece of gaming history.",
      category: "Console",
      stock: 50,
      quantity:1
    },
    {
      id: 5,
      name: 'Gaming PC',
      price: 1500,
      img: "https://osaka.ma/wp-content/uploads/2024/06/AMD-RYZEN-7-7700X-RTX-4060-OSAKA-PC-GAMER-SETUP-GAME.webp",
      description: "A powerful gaming PC equipped with a Ryzen 9 processor, RTX 3060 graphics, and 32GB RAM. Perfect for modern gaming and high-performance tasks.",
      category: "PC",
      stock: 10,
      quantity:1
    },
    {
      id: 6,
      name: 'Nintendo Wii',
      price: 120,
      img: "https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/39747/60774/WiiSystem_WhiteGCube__87080.1712839617.jpg?c=2",
      description: "The Nintendo Wii is a classic console known for its motion-based controls. It offers fun, family-friendly games and is an excellent choice for casual gaming.",
      category: "Console",
      stock: 25,
      quantity:1
    },
    {
      id:7,
      name:'Nintendo Switch',
      price:300,
      img:"https://i.etsystatic.com/32994724/r/il/48f1c8/3679727833/il_fullxfull.3679727833_rgz0.jpg",
      description: "The Nintendo Switch is a classic console known for its motion-based controls. It offers fun, family-friendly games and is an excellent choice for casual gaming.",
      category: "Console",
      stock: 10,
      quantity:1
    },
    {
      id: 6,
      name: 'Gaming PC',
      price: 1000,
      img: "https://cdn.awsli.com.br/64x50/2443/2443989/produto/191888985/15288147043-u1-04547d5f2d-500n6a7m4s.webp",
      description: "A powerful gaming PC equipped with a Ryzen 9 processor, RTX 4060 graphics, and 16GB RAM. Perfect for modern gaming and high-performance tasks.",
      category: "PC",
      stock: 10,
      quantity:1
    },
    {
      id: 7,
      name: 'PlayStation 2',
      price: 150,
      img: "https://www.ps2gameshop.nl/images/detailed/41/bundel_zwart_phat.jpg",
      description: "The PlayStation 3 is an older gaming console from Sony. Despite being discontinued, it remains a great option for budget gamers.",
      category: "Console",
      stock: 30,
      quantity:1
    },


  ];
  constructor() { }
  getProducts(){
    return of(this.items);
  }
}


