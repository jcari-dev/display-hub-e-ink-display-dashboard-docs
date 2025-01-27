---
sidebar_position: 1
---

# Weather Forecast

The Weather Forecast module provides real-time weather updates for a specified location. **Note:** This module supports only US ZIP codes. The module's display is a compact 1x1 square:

![Weather Forecast Module](/img/weather_module.png)


### Information Displayed

<img src="https://jcari-dev.github.io/display-hub-e-ink-display-dashboard-docs/img/weather_module_sample.jpg" alt="Description" class="module-images" />


The module presents the following details:
- **Current Temperature**: Includes the current temperature and the selected temperature scale (°F or °C).
- **Weather Description**: Provides a human-readable weather condition, such as "Clear Sky" or "Overcast."

### Usage

1. Enter a valid US ZIP code in the "Enter a ZIP Code" field.
2. Choose a temperature scale: °F, °C, or even °K if you're feeling adventurous.
3. Select a timezone. Leaving this as "Not Set" may result in Open Meteo's API being unable to detect your timezone correctly.
4. Click "Save Weather Settings." If successful, a green message will confirm the settings were saved. If not, a red message will indicate the failure.

### API Reference

The Weather Forecast module retrieves real-time weather data from the [Open-Meteo Current Weather API](https://open-meteo.com/). This integration is supported by user settings stored in the database, including the ZIP code and preferred temperature scale (°F or °C). 

#### Workflow
1. **ZIP Code to Coordinates**: 
   The module converts the user’s ZIP code into latitude and longitude using a local dataset (`US.txt`).
2. **API Request**:
   It then queries the Open-Meteo API with the derived coordinates and user preferences, such as temperature scale.
3. **Response Handling**:
   The response is parsed, and current weather data, including temperature and conditions, is returned for display.

#### Open-Meteo API Parameters
| Parameter         | Description                                     |
|-------------------|-------------------------------------------------|
| `latitude`        | Latitude from ZIP-to-coordinate conversion.     |
| `longitude`       | Longitude from ZIP-to-coordinate conversion.    |
| `current_weather` | Retrieves current weather data (always `True`). |
| `temperature_unit`| User-selected temperature scale (`°F` or `°C`). |
| `timezone`        | Automatically detected timezone.                |