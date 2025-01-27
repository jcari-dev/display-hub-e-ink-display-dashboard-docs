---
sidebar_position: 2
---

# Software Requirements

To use the `Display Hub`, ensure the following software and configurations are in place:

### 1. Raspberry Pi OS
- Recommended: **[Raspberry Pi OS](https://www.raspberrypi.com/software/)**.
- While it may work with other Linux-based operating systems, it has not been fully tested. Refer to the list of supported OS for compatibility.

---

### 2. Enable SPI Interface
To enable the SPI Interface on your Raspberry Pi:

1. Open the terminal and type:
   ```bash
   sudo raspi-config
   ```
2. Navigate to **Interfacing Options**.
   ![SPI Interface Example](/img/interfacing_options.png)
3. Select **SPI** and enable it.
   ![Select SPI](/img/enable_spi.png)
4. Reboot your Raspberry Pi with:
   ```bash
   sudo reboot
   ```

---

### 3. Docker and Docker Compose
- Follow the **[Docker and Docker Compose installation guide](https://docs.docker.com/engine/install/debian/)**.
- **Important**: Ensure the commands `docker` and `docker compose` are installed (not `docker-compose`, which refers to a standalone library).

---

<p style={{ textAlign: 'right', fontStyle: 'italic' }}>Image credits: Waveshare.</p>
