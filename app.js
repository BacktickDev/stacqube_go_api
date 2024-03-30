const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequlize');
require('dotenv').config();
const app = express();
const port = 3000;
const cors = require('cors');
const routes = require('./routes/index');


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());
app.use(cors({
    origin: '*'
}));

app.use('/api', routes);

app.listen(port, () => {
    sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
});
