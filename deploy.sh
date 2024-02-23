#!/bin/bash
set -e
# build app
docker build -t minoru/mi_frontend:latest --file=Dockerfile .
docker stop mi_frontend || echo "Warning: Error when delete old docker images"
docker rm mi_frontend || echo "Warning: Error when delete old docker images"
docker images -a | grep none | awk '{print $3}' | xargs -r docker rmi

docker-compose up -d
