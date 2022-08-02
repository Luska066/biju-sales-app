import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheProdutosComponent } from './detalhe-produtos/detalhe-produtos.component';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path:':id',component:DetalheProdutosComponent},
  { path: '', component: ProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
