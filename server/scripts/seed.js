const {
  getRandomInt,
  getRandomDate,
  getRandomNum,
} = require('../utils/randomUtils.js');
require('dotenv').config();

const {
  roundInvestedFixtures,
  companyNameFixtures,
} = require('../fixtures/fixtures.js');

const { initDBConnection } = require('../utils/dbUtils');
const db = require('../models');
const PortfolioCompany = db.portfolioCompany;

const seedData = async () => {
  try {
    await initDBConnection(() => {
      companyNameFixtures.forEach((name, index) => {
        const portfolioCompany = new PortfolioCompany({
          companyId: index,
          companyName: name,
          roundInvested:
            roundInvestedFixtures[
              getRandomInt(0, roundInvestedFixtures.length)
            ],
          amount:
            Math.round(getRandomInt(100000, 2000000) / 10000) * 10000,
          valuationAtRaise:
            Math.round(getRandomInt(500000, 20000000) / 10000) *
            100000,
          dateOfRaise: getRandomDate(
            new Date(2016, 1, 1),
            new Date()
          ),
          equityPercent: getRandomNum(5, 20).toFixed(2),
        });
        portfolioCompany.save(portfolioCompany);
      });
      console.log('Mock data is seeded from seed script.');
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

seedData();
