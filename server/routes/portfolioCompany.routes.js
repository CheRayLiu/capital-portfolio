module.exports = (app) => {
  const portfolioCompany = require('../controllers/portfolioCompany.controller.js');

  var router = require('express').Router();
  router.post('/portfolioCompany', portfolioCompany.create);
  router.get('/portfolioCompanies', portfolioCompany.findAll);

  app.use('/api', router);
};
