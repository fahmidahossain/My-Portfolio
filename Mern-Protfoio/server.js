const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
require("dotenv").config();
const dbconfig = require("./config/dbconfig");
const portfolioRoute = require("./routes/protfolioRoute");
app.use(express.json());
app.use("/api/portfolio",portfolioRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
