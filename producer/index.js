require('dotenv').config({ path: process.cwd().split("/").slice(0,-1).join("/") + '/.env' });

console.log(process.cwd().split("/").slice(0,-1).join("/"));
console.log(process.env.MQTT_BROKER_URL_STRING);

const main = require("./main");

try {
    main()
} catch (err) {
    console.error(err);
}