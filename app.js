require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./DB/mongoose');
const { PORT, ENVIRONMENT, SECRET, BASEURL, CLIENTID, ISSUERBASEASEURL } = require('./config');
const logger = require('./configuration');
const path = require('path');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");

swaggerDocument = require("./swagger.json");
const { auth } = require('express-openid-connect');

const { requiresAuth } = require('express-openid-connect');

const user = require('./router/user.router');
const diary = require('./router/diary.router');
const meeting = require("./router/meeting.router");
const account = require('./router/account.router');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

app.use(express.static('static'));
db.connect();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: BASEURL,
  clientID: CLIENTID,
  issuerBaseURL: ISSUERBASEASEURL
};

app.use(auth(config));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.use(cors());
app.use(express.json());

app.use('/api/user', user);
app.use('/api/diary', diary);
app.use("/api/meeting", meeting);
app.use('/api/account', account);

app.use((err, req, res, next) => {
  if (ENVIRONMENT === 'development')
    logger.error(err.message)
  if (err.message === 'user validation failed: email: Please enter a valid email')
    res.status(400).send(err.message);
  else {
    res.status(500).send(err.message)
  }
  next();
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, './static/404.html'));
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(PORT || 3000, () => logger.warn(`server is running on port ${PORT}`));


