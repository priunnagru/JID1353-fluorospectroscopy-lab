// A simple Node.JS app launcher for running with Passenger.
// THIS MUST BE IN /httpdocs FOR THE APP TO LAUNCH ON PLESK
const react_app = require("./public/index.html");
module.exports = {create: react_app.create};