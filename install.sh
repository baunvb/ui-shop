#!/bin/bash

########################################
# Default configs
########################################
COMPOSE_VERSION=v2.12.2
CTOP_VERSION=0.7.7

function install_docker_and_tools() {
    echo "Installing Docker..."
    wget -qO- https://get.docker.com/ | sh

    echo "Installing docker-compose..."
    sudo wget -q https://github.com/docker/compose/releases/download/$COMPOSE_VERSION/docker-compose-`uname -s`-`uname -m` \
        -O /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
}

install_docker_and_tools
