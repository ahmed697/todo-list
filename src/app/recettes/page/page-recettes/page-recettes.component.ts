import { Component, OnInit } from '@angular/core';
import { Legume, ListRec } from '../../model/recettes';

@Component({
  selector: 'app-page-recettes',
  templateUrl: './page-recettes.component.html',
  styleUrls: ['./page-recettes.component.scss']
})
export class PageRecettesComponent implements OnInit {
  legumes : Legume[] = [
    {icon : "🍓",
     name : "Fraise"},
    {icon: "🍌",
     name : "Banane"},
    {icon : "🍆",
     name : "Aubergine"},
    {icon : "🍅",
     name : "Tomate"},
    {icon : "🍎",
     name : "Pomme"}
  ]
  liste : ListRec[] = [



    
  ]
  addLegumes(nvLegume : Legume): void{
    const index = this.liste.findIndex(listeItem => {
      if (listeItem.legume.name === nvLegume.name) return true
      return false
    })

    if(index > -1){
      this.liste[index].quantite++
      return
    }
    this.liste.push({quantite:1, legume: nvLegume})
    console.log(this.liste)
  
  
  }
  deleteLegumes(index : number): void{
    // this.liste.splice(index, 1)
    
    const quantite = this.liste[index].quantite
    if(quantite <= 1){
       this.liste.splice(index, 1)

    }else{
      this.liste[index].quantite--
    }
    

  }

  constructor() { }

  ngOnInit(): void {
  }

}
