import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { Http } from '@angular/http';
import { EmailService } from './email-service';
import { EmailModel } from '../../models/email.model';
@Component({
    selector: 'page-notification',
    templateUrl: 'notification.html'
})

export class NotificationPage implements OnInit {
    private param;

    constructor(private navCtrl: NavController,
                private navParams: NavParams ,
                private http: Http,
                private toastCtrl: ToastController,
                private sendEmailService:EmailService) 
    {
        this.param = navParams.get("param");
    }

    toiletProblem: string = "";
    problemDesc: string = "";
    problems: Array<string> = [ "Sem papel", "Sem sabonete", "Sem luz", "Com vazamento", "Outro" ];
    selectedItem: String;
    othersSelected: boolean = true;
    emailModel: EmailModel = new EmailModel();

    ngOnInit() { 
    }
    
    itemSelected(item){
        this.selectedItem = item;
        if(item == "Outro") {
            this.othersSelected = false;            
        } else {
            this.othersSelected = true;            
        }
        // console.log(item);
    }
    

    notifyFC() {
    this.emailModel.to = "matheus.campos@fcamara.com.br";
    this.emailModel.subject = "Report de "+localStorage.getItem('userName');
    if(this.othersSelected == true){
        this.emailModel.text = localStorage.getItem('userName')+" reportou que o "+this.param+" está "+this.selectedItem;
    }else{
        this.emailModel.text = localStorage.getItem('userName')+" reportou a seguinte mensagem no "+this.param+": "+this.problemDesc;
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
  }
}