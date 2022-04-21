// src/app/disney/page/dysney-page/dysney-page.component.ts
import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { DisneyData, Personnage} from '../../model/films';
import { FilmsService } from '../../service/films.service'

@Component({
  selector: 'app-dysney-page',
  templateUrl: './page-films.component.html',
  styleUrls: ['./page-films.component.scss'],
})
export class PageFilmsComponent implements OnInit {
  // stock les données de l'api
  disneyData: DisneyData | null = null;



  ngOnInit(): void {
    // quand le composant s'affiche, nous éxécutons la  méthode getDisneyData
    this.getDisneyData();
  }

  // method pour récupérer les données en ligne
  getDisneyData(): void {
    fetch('https://api.disneyapi.dev/characters')
      .then((response) => {
        // les données récupérées son au format Json, cette ligne les convertie en variable
        return response.json();
      })
      .then((disneyData) => {
        // nous stockons les variables de l'api dans notre composant
        this.disneyData = disneyData;
      });
    }


    personnages : Personnage[] = this.filmsService.restorer()

    addPersonnage(nvPersonnage : Personnage): void {
      this.personnages.push(nvPersonnage)
      this.filmsService.sauvegarder(this.personnages)
    }
    deletePersonnage(index : number): void{
      this.personnages.splice(index, 1)
      this.filmsService.sauvegarder(this.personnages)
    }
    isFavorite(personnage: Personnage): boolean{
      const index = this.personnages.findIndex(personnageItem => {
        if(personnage._id === personnageItem._id) return true
        return false
      })
      if(index > -1){
        return true
      }
      return false
    }

    sauvegarder():void{
      this.filmsService.sauvegarder(this.personnages)
      console.log(this.personnages)
    }
    constructor(private filmsService: FilmsService) {}
  }


