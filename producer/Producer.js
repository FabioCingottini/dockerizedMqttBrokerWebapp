const MQTT = require("async-mqtt");

class Producer {

    constructor (mqttBrokerUrl="tcp://127.0.0.1:1883") {
        this.client = MQTT.connect(mqttBrokerUrl);
        this.isClientConnected = new Promise(resolve => {
            this.client.on("connect", () => {
                resolve(true);
            });
        });
    }

    async publish(topic, message) {
        try {
            await this.client.publish(topic, message);
            return true
        } catch (err) {
            return false;
        }
    }

}

module.exports = Producer;