import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestaquesComponent } from './componentes/destaques/destaques.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { EfetivarpedidoComponent } from './componentes/efetivarpedido/efetivarpedido.component';
import { ReciboComponent } from './componentes/recibo/recibo.component';
import { BuscacategoriaComponent } from './componentes/buscacategoria/buscacategoria.component';
import { BuscapalavrachaveComponent } from './componentes/buscapalavrachave/buscapalavrachave.component';


const routes: Routes = [
  { path: '', component: DestaquesComponent },
  { path: 'detalhe/:id', component: DetalhesComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'efetivarpedido', component: EfetivarpedidoComponent },
  { path: 'recibo/:id', component: ReciboComponent },
  { path: 'categoria/:id', component: BuscacategoriaComponent },
  { path: 'busca', component: BuscapalavrachaveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
