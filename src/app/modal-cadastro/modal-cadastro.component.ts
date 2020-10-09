import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.css']
})
export class ModalCadastroComponent {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModalWithComponent() {
    const initialState = {
      title: 'Cadastro usuário'
    };
    this.bsModalRef = this.modalService.show(ModalCadastroComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}

/* This is a component which we pass in modal*/

@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <form>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="nome">Nome</label>
                        <input type="text" class="form-control" id="nome" aria-describedby="emailHelp">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="idade">Idade</label>
                        <input type="number" class="form-control" id="idade" min="1">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                </div>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Gostaria de receber
                    novidades</label>
            </div>
        </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div>
  `
})

export class ModalContentComponent implements OnInit {
  title: string;
  closeBtnName: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {

  }
}