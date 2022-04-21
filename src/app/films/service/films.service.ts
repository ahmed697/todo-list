import { Injectable } from '@angular/core';
import { Personnage } from '../model/films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor() { }
  
    private key: string = 'film';
  
    public sauvegarder(films: Personnage[]): void {
      // Conversion de notre variable en JSON
      console.log(films)
      const filmsConverties = JSON.stringify(films);
  
      // Sauvegarde de nos données dans le navigateur
      localStorage.setItem(this.key, filmsConverties);
    }
  
    public restorer(): Personnage[] {
      // Récupération des données dans le navigateur au format JSON
      const filmsConverties = localStorage.getItem(this.key);
  
      // on teste si des données sont bien présente
      if (filmsConverties) {
        // Conversion de nos données JSON en variable
        const filmsDeConverties = JSON.parse(filmsConverties);
  
        // On retourne nos todolist et on indique que c'est bien une list de Todo
        return filmsDeConverties as Personnage[];
      }
  
      // Si aucune donnée n'est présente dans le navigateur on lui retourne une TodoList Vide
      return [];
    }
  }

