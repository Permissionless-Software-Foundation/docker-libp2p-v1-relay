# docker-libp2p-v1-relay

This repository builds a Docker image that contains an instance of [go-libp2p-relay-daemon](https://github.com/libp2p/go-libp2p-relay-daemon) configured as a V1 [Circuit Relay](https://docs.libp2p.io/concepts/circuit-relay/).

This is used by the [Permissionless Software Foundation](https://psfoundation.info) IPFS network to allow for automatic tunneling through firewalls, in order share files across the network.

## Installation

- Ensure you have Docker and Docker Compose installed. It's assumed you are running on Ubuntu Linux.
  - [Directions](https://bafybeia6bmmobrl2mrracakx6uzohjwdnymzzgvw6d4voesri5ghfh2nju.ipfs.dweb.link/docs/dev-ops/overview) ([Mirror](https://christroutner.github.io/trouts-blog/docs/dev-ops/overview))
- `git clone https://github.com/Permissionless-Software-Foundation/docker-libp2p-v1-relay`
- `cd docker-libp2p-v1-relay`
- `docker-compose pull`
- `docker-compose up -d`

You can customize the [relay-config](./relay-config) if you'd like different settings.

This Docker container is built for AMD64 architecture. But it can also be built for ARM64 (Raspberry Pi) architecture by modifying the [Dockerfile](./Dockerfile).

## Persistent Identity

The Docker container generates a new IPFS ID every time it is restarted. This is a problem if you are trying to use this Docker container as a piece of infrastructure that needs to retain its ID over time.

To make the identity persistent, follow these steps:

- Bring the Docker container up (`docker-compose up -d`)
- Enter the Docker container with `docker exec -it circuit-relay-v1 bash`
- Use the `scp` tool to send the `identity` file to the host machine
- Take the Docker container down (`docker-compose down`)
- Edit the last line of the Dockerfile to this: `CMD ["/root/go/bin/libp2p-relay-daemon", "-config", "/root/go/bin/relay-config", "-identity", "/root/go/bin/identity"]`
- Add this line to the `volumes` section of docker-compose.yml: `- ./identity:/root/go/bin/identity`
- Comment out the `image` property and uncomment the `build` property in docker-compose.yml
- Build the Docker container: `docker-compose build`
- Bring the container up: `docker-compose up -d`

## License

[MIT](./LICENSE.md)
