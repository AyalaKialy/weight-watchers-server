require('dotenv').config();

const PORT = process.env.PORT;
const ENVIRONMENT = process.env.ENVIRONMENT;
CONNECTION_STRING = process.env.CONNECTION_STRING;

module.exports = { PORT, ENVIRONMENT, CONNECTION_STRING };
