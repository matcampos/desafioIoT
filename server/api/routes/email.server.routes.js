var email = require('../controllers/email.server.controller');
  
module.exports = (app) => {
    app.route('/api/sendmail')
        .post(email.send)
}