module.exports = function(app) {

  //Home route x3
  app.get('/', require('./controllers/HomeCtrl.js'));
  app.get('/home', require('./controllers/HomeCtrl.js'));
  app.get('/index', require('./controllers/HomeCtrl.js'));

};
