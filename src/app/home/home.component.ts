import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacaoService } from '../notificacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private notificacaoService:NotificacaoService
    ) { }

  ngOnInit(): void {
  }
  formCadastro = this.fb.group({
  name:["",[
    Validators.minLength(5),
    Validators.required
  ]],
  email:["",[
    Validators.email,
    Validators.required
  ]],
  tel:["",[
    Validators.minLength(5),
    Validators.required
  ]]
  });

  cadastrar(){
    this.notificacaoService.notifica("Cadastrado com Sucesso!");
    this.formCadastro.reset();
  }
  
}
