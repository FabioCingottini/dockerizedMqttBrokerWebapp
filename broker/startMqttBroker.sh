#!/usr/bin/env sh

sudo docker run \
    -p 1883:1883 \
    -it \
    --rm \
    -d \
    --name mqtt_docker_broker \
    --network 526399fefd15 \
    -u 996:995 \
    -v $(pwd)/log:/mosquitto/log:rw \
    -v $(pwd)/config/mosquitto.config:/mosquitto/config/mosquitto.config:ro \
    eclipse-mosquitto:1.5.4
