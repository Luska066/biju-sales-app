import { Injectable } from '@angular/core';
import { produtos, Produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
produtos:Produtos[] = produtos;
  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId:number){
    return this.produtos.find(produto => produto.id == produtoId);
  }
}
