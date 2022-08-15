import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Injectable, Component } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';


export enum AlerTypes {
  DANGER =  'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: string){
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent)
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }

  showAlertDanger(message:string){
    this.showAlert(message, AlerTypes.DANGER)
  }

  showAlertSuccess(message:string){
    this.showAlert(message, AlerTypes.SUCCESS)
  }
}
