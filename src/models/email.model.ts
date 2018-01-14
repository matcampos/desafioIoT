export class EmailModel {
    to: string;
    subject: string;
    text: string;

    constructor() {
        this.to = "";
        this.subject = "";
        this.text = "";
    }

}