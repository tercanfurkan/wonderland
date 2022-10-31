var mongoose = require('mongoose');

const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const cluster = process.env.DB_CLUSTER;
const hostName = process.env.DB_HOST_NAME;
const retryWrites = process.env.DB_RETRY_WRITES;
const writeConcern = process.env.DB_WRITE_CONCERN;
const uri =
  `mongodb+srv://${username}:${password}@${cluster}.${hostName}/?retryWrites=${retryWrites}&w=${writeConcern}`;
mongoose.connect(uri)