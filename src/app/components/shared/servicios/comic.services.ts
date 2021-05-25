import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ComicService {
  public urlApi: string; 
  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
  }
 
  obtener(imagen) {  
    debugger
    const url = this.urlApi + imagen + "/info.0.json";
    const headers = new HttpHeaders({
     "content-type": "application/json",  
    });      
    return this.httpClient.get(url,{headers});
  }
  
  ImagenActual() {  
    debugger
    const url = this.urlApi + "/info.0.json";
    const headers = new HttpHeaders({
     "content-type": "application/json",  
    });      
    return this.httpClient.get(url,{headers});
  }
  
  
  
}
