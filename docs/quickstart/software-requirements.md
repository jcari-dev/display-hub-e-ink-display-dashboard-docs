---
sidebar_position: 2
---

# Software Requirements

In order to use the `Display Hub` you will need the following software:

- **[Raspberry Pi OS](https://www.raspberrypi.com/software/)**
- - It should technically work with other Linux based OS, but it has not been manually tested.Please refer to the list of OS in which it has been manually tested and compatibility is guaranteed.
- **SPI Interface Enabled**
- - To enable the SPI Interface, take the following actions:
- - - Type in the terminal `sudo raspi-config`.
- - - Navigate to **Interfacing Options**.
      ![SPI Interface Example](/img/interfacing_options.png)
- - - Select **SPI** and enable it.
      ![Select SPI](/img/enable_spi.png)

- - - Then reboot with `sudo reboot` to reboot your Pi.
- **Docker and Docker Compose**.
- - Please reference the Docker and Docker Compose installation [guide](https://docs.docker.com/engine/install/debian/).
- - **Note**: Display Hub expects the commands `docker` and `docker compose` not (`docker-compose` which is from a standalone library)

<p style={{ textAlign: 'right', fontStyle: 'italic' }}>Image credits to Waveshare.</p>

