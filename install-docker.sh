#!/bin/sh

# Compiled set of install directions from https://docs.docker.com/engine/install/ubuntu/
# Installs docker and runs hello-world to verify installation.
# needs su permissions.

apt-get update

apt-get install \
    ca-certificates \
    curl \
    gnupng \
    lsb-release

mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update

apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

docker run hello-world