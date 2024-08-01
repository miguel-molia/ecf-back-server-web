const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const errorHandler = require('./middlewares/errorHandler'); 
const routes = require('./routes/index'); 

app.use(cors());
app.use(bodyParser.json());


app.use('/', routes);


app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));

