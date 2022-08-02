import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { NotificacaoService } from '../notificacao.service';
import { ProdutosDescricao } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: ProdutosDescricao[] =[];
  total=0;
  constructor(
    public carrinhoService:CarrinhoService,
    private router:Router,
    private notificacaoService:NotificacaoService,
  ) { }

  ngOnInit(): void {
  this.itensCarrinho = this.carrinhoService. obtemCarrinho();
  this.calculoTotal();
  }

  removerProdutoCarrinho(produtoId:number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculoTotal();
  }

  calculoTotal(){
    this.total = this.itensCarrinho.reduce((prev,curr) => prev + (curr.preco*curr.quantidade),0)
  }

  comprar(){
    this.notificacaoService.notifica("Compra Realizada Com Sucesso!")
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"])
  }

}
