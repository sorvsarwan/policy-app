/**
 * Routes
 * @desc This routes file is used to define all app routes as module wise.
 * @author [Sourabh Sarwan]
 */

const express = require("express");
const policyRoute = require("./policy");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/policy",
    route: policyRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
