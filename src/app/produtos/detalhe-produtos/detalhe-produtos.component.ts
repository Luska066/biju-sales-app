import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ProdutoService } from 'src/app/produto.service';
import { Produtos, ProdutosDescricao } from 'src/app/produtos';

@Component({
  selector: 'app-detalhe-produtos',
  templateUrl: './detalhe-produtos.component.html',
  styleUrls: ['./detalhe-produtos.component.css']
})
export class DetalheProdutosComponent implements OnInit {
produto: Produtos|undefined;
quantidade=1;
  constructor(
    private produtosService:ProdutoService,
    private route:ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }


  adicionarAoCarrinho(){
    this.notificacaoService.notifica("Produto Adicionado Ao Carrinho!");
    const produto:ProdutosDescricao={
      ...this.produto!,
      quantidade:this.quantidade
    };
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

}
