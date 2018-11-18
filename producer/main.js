`use strict`;

const Producer = require("./Producer");

module.exports = async function () {
    try {
        const producer = new Producer(process.env.MQTT_BROKER_URL_STRING);
        await producer.publish(process.env.MQTT_BROKER_TOPIC, "asdasddcsdcvsf");
    } catch (err) {
        console.error(err);
    }
};