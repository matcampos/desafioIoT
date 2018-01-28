import { Component, OnInit } from '@angular/core';
import { NavParams, ToastController } from 'ionic-angular';
import { EmailService } from './email-service';
import { EmailModel } from '../../models/email.model';
@Component({
    selector: 'page-notification',
    templateUrl: 'notification.html'
})

export class NotificationPage implements OnInit {
    private param;

    constructor(private navParams: NavParams,
        private toastCtrl: ToastController,
        private sendEmailService: EmailService) {
        this.param = navParams.get("param");
    }

    toiletProblem: string = "";
    problemDesc: string = "";
    problems: Array<string> = ["Sem papel", "Sem sabonete", "Sem luz", "Com vazamento", "Outro"];
    selectedItem: String;
    othersSelected: boolean = true;
    emailModel: EmailModel = new EmailModel();

    ngOnInit() {
    }

    itemSelected(item) {
        this.selectedItem = item;
        if (item == "Outro") {
            this.othersSelected = false;
        } else {
            this.othersSelected = true;
        }
        // console.log(item);
    }


    notifyFC() {
 
        if (this.selectedItem) {
            this.emailModel.to = "matheus.alves1998@hotmail.com";
            this.emailModel.subject = "Report de " + localStorage.getItem('userName');
            if (this.othersSelected == true) {
                this.emailModel.text = localStorage.getItem('userName') + " reportou que o " + this.param + " está " + this.selectedItem;
            } else {
                if (this.problemDesc){
                this.emailModel.text = localStorage.getItem('userName') + " reportou a seguinte mensagem no " + this.param + ": " + this.problemDesc;
                }
                else{
                    let toast = this.toastCtrl.create({
                        message: 'Escreva algo na descrição do problema!',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                    return;
                }
            }
            this.sendEmailService.send(this.emailModel)
                .subscribe(res => {
                    console.log(res);
                }, error => {
                    console.log(error);
                })

            let toast = this.toastCtrl.create({
                message: 'Problema notificado com sucesso!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            // this.navCtrl.push(HomePage);
        } else {
            let toast = this.toastCtrl.create({
                message: 'Escolha um problema para notificar!!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    }
}