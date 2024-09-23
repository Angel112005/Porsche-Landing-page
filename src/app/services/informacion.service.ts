import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor() { }

  getInfo(){
    return[
      {title: "El nuevo Macan totalmente eléctrico.", alt: "Macan eléctrico", src: "/ElectricMacan.png"},
      {title: "Porsche 911 Turbo Edition 50 Years.", alt:"911 Turbo", src:"/911Edition50Y (1).png"},
      {title: "Porsche Mobil 1 Supercup.", alt:"Mobil 1 supercup", src:"PorscheMobil1.png"}
    ]
  }
}
