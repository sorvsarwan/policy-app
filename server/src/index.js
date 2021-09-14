/**
 * Start File
 * @desc It is used to start server and DB connections
 * @author [Sourabh Sarwan]
 */

const config = require("./config");
const app = require("./app");
const database = require("./config/database");

let server;

database.sync().then(() => {
  server = app.listen(config.port, () => {
    console.info(`Listening to port ${config.port}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
