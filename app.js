require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./DB/mongoose');
const { PORT, ENVIRONMENT } = require('./config');
const logger = require('./configuration');
const path = require('path');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

const user = require('./router/user.router');
const meeting = require("./router/meeting.router");

app.use(express.static('static'));
db.connect();

app.use(cors());

app.use(express.json());

app.use('/api/user', user);
app.use("/api/meeting", meeting);

app.use((err, req, res, next) => {
    if (ENVIRONMENT === 'development')
        logger.error(err.message)
    else {
        res.status(500).send(err.message)
        logger.error(`${error}`)
    }
    next();
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname,'./static/404.html'));

});

app.listen(PORT || 8200, () => logger.warn(`server is running on port ${PORT}`));





