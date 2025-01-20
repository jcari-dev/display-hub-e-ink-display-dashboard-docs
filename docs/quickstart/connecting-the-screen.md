---
sidebar_position: 3
---

# Connecting the Screen

To connect the e-Paper display to a Raspberry Pi, connect each pin on the display to the corresponding GPIO pin on the Raspberry Pi as shown in the table below:

| **e-Paper Connector** | **Raspberry Pi Pin (Board)**                              |
|------------------------|----------------------------------------------------------|
| VCC                   | 3.3V (Pin 1)                                              |
| GND                   | GND (Pins 6, 9, 14, 20, 25, 30, 34, or 39)                |
| DIN                   | GPIO 10 (MOSI, Pin 19)                                    |
| CLK                   | GPIO 11 (SCLK, Pin 23)                                    |
| CS                    | GPIO 8 (CE0, Pin 24)                                      |
| DC                    | GPIO 25 (Pin 22)                                          |
| RST                   | GPIO 17 (Pin 11)                                          |
| BUSY                  | GPIO 24 (Pin 18)                                          |

For reference, you can find a detailed pin layout of the Raspberry Pi GPIO pins on the [Pinout.xyz website](https://pinout.xyz/).

Depending on the model of the e-Paper screen, you may also be able to connect the display directly as a HAT. Refer to the supported displays guide for more details.
