const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { initDBConnection } = require('./utils/dbUtils');
var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initDBConnection(() => {
  app.get('/', (req, res) => {
    res.json({ message: "Welcome to Ray's application." });
  });

  require('./routes/portfolioCompany.routes')(app);

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});
