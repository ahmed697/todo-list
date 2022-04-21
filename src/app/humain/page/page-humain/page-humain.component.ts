import { Component, OnInit } from '@angular/core';
import { Humain } from '../../model/humain';
import { HumainService } from '../../service/humain.service';

@Component({
  selector: 'app-page-humain',
  templateUrl: './page-humain.component.html',
  styleUrls: ['./page-humain.component.scss']
})
export class PageHumainComponent implements OnInit {
  humains : Humain[] = [
    {name: "Ajouter",
     icon: "🧑"},
    {name: "Ajouter",
     icon: "👩"},
    {name: "Ajouter",
     icon: "👨"},
    {name: "Ajouter",
     icon: "👶"},
  ]
  lists : Humain[] = this.humainService.restorer()

  Ajouter(nvHumain : Humain) : void{
      this.lists.push(nvHumain)
      this.humainService.sauvegarder(this.lists)
  }

  deleteHumain(index : number):void{
    this.lists.splice(index,1)
    this.humainService.sauvegarder(this.lists)
  }

  sauvegarder(): void {
    this.humainService.sauvegarder(this.lists);
  }

  constructor(private humainService: HumainService) { }

  ngOnInit(): void {
  }

}
