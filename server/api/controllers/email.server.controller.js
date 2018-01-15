'use strict';

const nodemailer = require('../../node_modules/nodemailer/lib/nodemailer');

let transporter = nodemailer.createTransport(
    {
        service: "SendinBlue",
        auth: {
            user: 'matheus.campos@fcamara.com.br',
            pass: 'AhHnWzY9tb1TkPVg'
        },
        logger: false,
        debug: false
    }
);

exports.send = (req, res) => {
    let message = {
        from: 'FCamara <e-mail@fcamara.com.br>',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    };

    transporter.sendMail(message, (error, info) => {
        if (error) {
            res.sendStatus(500);
            console.log('Erro no envio');
            console.log(error.message);
            return process.exit(1);
        }
        res.sendStatus(200);
        console.log('Email enviado com sucesso');
        console.log(nodemailer.getTestMessageUrl(info));
    });
};
