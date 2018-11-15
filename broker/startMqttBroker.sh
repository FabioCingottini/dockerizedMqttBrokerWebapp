#!/usr/bin/env sh

sudo docker run \
    -p 1883:1883 \
    -it \
    --rm \
    -d \
    --name mqtt_docker_broker \
    -v $(pwd)/mosquitto.log:/mosquitto/log/mosquitto.log \
    mqtt_docker_broker:latest