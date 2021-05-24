import { Component, OnInit } from '@angular/core';
import { ComicService } from '../servicios/comics/comic.services';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

 imagenA: any = [];
 imagen: any = [];

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.obtenerImagenA();
  }

  obtenerImagenA(){
    debugger
    this.comicService.ImagenActual().subscribe(
      data => {
        debugger
        this.imagenA = data;
        let dato =  this.getRandomInt(1,this.imagenA.num);
        this.comicService.obtener(dato).subscribe(
          data => {
            debugger
            this.imagen = data;               
            
          },
          err => {
          
          });
        
      },
      err => {
      
      });
  }
  // Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
  getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

}
