const express = require('express');
const dotenv = require('dotenv');
const listEndpoints = require('express-list-endpoints');
const cors = require('cors');


//INITIAL SETUP

const server = express();
dotenv.congif();
const port = process.env.PORT //  3008

//MIDDLEWARES
server.use(cors());
server.use(express.json());

//ROUTE
server.use("/api",services)

//ERROR HANDLERS
console.log(listEndpoints(server))


server.listen(port, () => {
	if (server.get("env") === "production")
		console.log("Server is running on CLOUD on PORT:", port);
	console.log("Server is running LOCALLY on PORT:", port);
});