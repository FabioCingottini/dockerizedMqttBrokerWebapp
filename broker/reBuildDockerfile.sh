#!/usr/bin/env sh

sudo docker rmi mqtt:latest
sudo docker build -f Dockerfile.mqtt_docker_broker -t mqtt_docker_broker:latest .