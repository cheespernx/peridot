const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require("body-parser");

const LeadsRoutes = require('./src/routes/LeadsRoutes');

app.use(cors);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(LeadsRoutes);

app.listen(3000, () => {
	console.log("Servidor rodando.");
});