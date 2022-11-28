const db = require('../models');
const PortfolioCompany = db.portfolioCompany;

exports.create = (req, res) => {
  const portfolioCompany = new PortfolioCompany({
    companyName: req.body.companyName,
    roundInvested: req.body.roundInvested,
    amount: +req.body.amount,
    valuationAtRaise: +req.body.valuationAtRaise,
    dateOfRaise: req.body.dateOfRaise,
    equityPercent: req.body.equityPercent,
  });

  portfolioCompany
    .save(portfolioCompany)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while creating the portfolio company.',
      });
    });
};

exports.findAll = (req, res) => {
  const { page, size } = req.query;

  const { limit, offset } = getPagination(page, size);
  PortfolioCompany.paginate({}, { offset, limit })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving portfolio companies.',
      });
    });
};

function getPagination(page, size) {
  const limit = size ? +size : 2000;
  const offset = page ? page * limit : 0;

  return { limit, offset };
}
