module.exports = (app) => {
    require('../api/routes/email.server.routes')(app);
	return app;
};