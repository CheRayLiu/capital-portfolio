module.exports = (app) => {
  const portfolioCompany = require('../controllers/portfolioCompany.controller.js');

  var router = require('express').Router();
  router.post('/', portfolioCompany.create);
  router.get('/', portfolioCompany.findAll);

  app.use('/api/portfolioCompany', router);
};
