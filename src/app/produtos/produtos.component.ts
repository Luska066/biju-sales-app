import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timestamp } from 'rxjs';
import { ProdutoService } from '../produto.service';
import { produtos, Produtos } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
descricao="";
produtos:Produtos[]|undefined;

  constructor(
    private produtosService:ProdutoService,
    private routes: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
  this.produtos = this.produtosService.getAll();
  this.routes.queryParamMap.subscribe(params => {
    const descricao = params.get("nomeProduto")?.toLowerCase();

    if(descricao){
     this.produtos = produtos.filter(produto => produto.nomeProduto.toLowerCase().includes(descricao));
     return;
    }else{
    this.produtos = produtos;
    }
  })
  }

pesquisar(){
    if(this.descricao){
    this.router.navigate(["produtos"],{queryParams :{nomeProduto:this.descricao}})
    return;
    }else{
      this.router.navigate(["produtos"])
    }
  }

}
