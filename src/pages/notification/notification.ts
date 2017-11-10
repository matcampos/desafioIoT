import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { Http } from '@angular/http';
import { EmailComponent } from './email-component';

@Component({
    selector: 'page-notification',
    templateUrl: 'notification.html'
})

export class NotificationPage implements OnInit {
    private param;

    constructor(private navCtrl: NavController,
                private navParams: NavParams ,
                private http: Http,
                private toastCtrl: ToastController) 
    {
        this.param = navParams.get("param");
    }

    toiletProblem: string = "";
    problemDesc: string = "";
    problems: Array<string> = [ "Sem papel", "Sem sabonete", "Sem luz", "Com vazamento", "Outro" ];
    selectedItem: String;
    othersSelected: boolean = true;
    sendEmailComponent: EmailComponent = new EmailComponent(this.http);

    ngOnInit() { 
    }
    
    itemSelected(item){
        this.selectedItem = item;
        if(item == "Outro") {
            this.othersSelected = false;            
        } else {
            this.othersSelected = true;            
        }
        console.log(item);
    }
    
    reportProblem(item){
        let recipient: string = "contato@fcamara.com.br";
        let subject: string = this.param;
        let message: string;
        if (this.selectedItem == null){
            let toast = this.toastCtrl.create({
                message: 'Selecione um problema!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        } else if (this.selectedItem == "Outro"){
            if(this.problemDesc !== ""){
                message = this.problemDesc;
                this.sendEmailComponent.send(recipient, subject, message);
                
                let toast = this.toastCtrl.create({
                    message: 'Problema notificado com sucesso!',
                    duration: 3000,
                    position: 'top'
                });
                toast.present(); 
            } else {
                let toast = this.toastCtrl.create({
                    message: 'Preencha a descrição do problema!',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        } else {    
            message = "O banheiro está " + this.selectedItem.toLowerCase();
            this.sendEmailComponent.send(recipient, subject, message);
           
            let toast = this.toastCtrl.create({
                message: 'Problema notificado com sucesso!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    }
}