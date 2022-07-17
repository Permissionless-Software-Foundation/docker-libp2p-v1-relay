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

## License

[MIT](./LICENSE.md)
