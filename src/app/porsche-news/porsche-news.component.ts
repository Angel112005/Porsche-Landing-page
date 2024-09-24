import { Component } from '@angular/core';
import {InformacionService} from '../services/informacion.service'

@Component({
  selector: 'app-porsche-news',
  templateUrl: './porsche-news.component.html',
  styleUrl: './porsche-news.component.css'
})
export class PorscheNewsComponent {
  titles: any[]=[];

  constructor(private InformacionService: InformacionService){}

  ngOnInit(): void{
    this.titles = this.InformacionService.getInfo();
  }
}
