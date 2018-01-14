import { Injectable } from '@angular/core';
import { HttpClient } from './http-client';

import { EmailModel } from '../../models/email.model'

@Injectable()
export class EmailService {

    urlApi: string = "http://localhost:3000/api/sendmail";

    constructor(private httpClient: HttpClient) { }

    send(emailModel: EmailModel) {

        let url = this.urlApi;
        let body = JSON.stringify({ to: emailModel.to, subject: emailModel.subject, text: emailModel.text });

        return this.httpClient.post(url, body);
    }

}