import {Component} from '@angular/core';
import {Http, Request, RequestMethod, Headers} from "@angular/http";

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class EmailComponent {

    http: Http;
    mailgunUrl: string;
    mailgunApiKey: string;

    constructor(http: Http) {
        this.http = http;
        this.mailgunUrl = "sandboxe00dadfddecb4a70a3137899a0743258.mailgun.org";
        this.mailgunApiKey = window.btoa("api:key-ca35e368da4e5808bc61d2a205ea7c30");
    }

    send(recipient: string, subject: string, message: string) {
        var requestHeaders = new Headers();
        requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
        requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        this.http.request(new Request({
            method: RequestMethod.Post,
            url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
            body: "from=test@example.com&to=" + recipient + "&subject=" + subject + "&text=" + message,
            headers: requestHeaders
        }))
        .subscribe(success => {
            console.log("SUCCESS -> " + JSON.stringify(success));
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }
}