import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = ["http://localhost:3000/cadernos", "http://localhost:3000/post-its"]

  constructor(private httpClient: HttpClient) { }

  cadernos = [] as Cards []
  postIts: any

  async getDados() {
    const listaCadernos = await this.httpClient.get<any>(this.url[0]).toPromise();
    const listaPostIts = await this.httpClient.get<any>(this.url[1]).toPromise();
    this.postIts = listaPostIts;
    this.cadernos = listaCadernos;
    console.log(this.cadernos);
    
  }
}
