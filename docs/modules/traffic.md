---
sidebar_position: 4
---

# Traffic Incidents

<img src="https://jcari-dev.github.io/display-hub-e-ink-display-dashboard-docs/img/traffic_module_sample.jpg" alt="Description" class="module-images" />


<p style={{ textAlign: 'right', fontStyle: 'italic' }}>Weather Forecast module displaying the current temperature and weather condition.</p>

### Overview

The Weather Forecast module provides real-time weather updates for a specified location using the <br /> [Open-Meteo Current Weather API](https://open-meteo.com/). **Note:** Only US ZIP codes are supported. The module's display is a compact **1x1 square**:

----

### Web GUI View
![Weather Forecast Module](/img/weather_module.png)

----

### Information Displayed


The module presents the following details:  
- **Current Temperature**: Displays the temperature with the selected unit (°F or °C).  
- **Weather Description**: Provides a human-readable condition, such as "Clear Sky" or "Overcast."

----

### Usage

1. Click the "**Select a Module:**" dropdown at the top of the web GUI and select the "**Weather**" module.
2. Click the green "**Add Module**" button to the right of the dropdown.
3. Drag and drop the module to your desired position within the grid.
4. Enter a valid US ZIP code in the **"Enter a ZIP Code"** field.  
5. Choose a temperature scale: °F, °C, or °K.  
6. Select a timezone. Leaving this as "Not Set" may prevent Open-Meteo's API from detecting the correct timezone.  
7. Click **"Save Weather Settings"**:  
   - A green confirmation message will appear if the settings are saved successfully.  
   - A red error message will indicate a failure.  
8. Click **"Update Display"**:  
   - The screen will blink (indicating a cleaning sequence) and display the updated configuration.

----

### Workflow

The Weather Forecast module retrieves real-time weather data based on user settings stored in the database, including ZIP code and preferred temperature scale.  

1. **Retrieve Settings**:  
   The module pulls the selected zipcode and preferred temperature scale settings from the database.  

2. **ZIP Code Conversion**:  
   The module converts the ZIP code to latitude and longitude using a local dataset (`US.txt`).  

3. **API Request**:  
   It queries the Open-Meteo API with the derived coordinates and user preferences, such as temperature scale.  

4. **Response Handling**:  
   The API's response is parsed to extract the temperature and weather conditions for display.  

----

### Open-Meteo API Parameters

| Parameter          | Description                                      |
|--------------------|--------------------------------------------------|
| `latitude`         | Latitude from ZIP-to-coordinate conversion.      |
| `longitude`        | Longitude from ZIP-to-coordinate conversion.     |
| `current_weather`  | Retrieves current weather data (always `True`).  |
| `temperature_unit` | User-selected temperature scale (`°F`, `°C`, or `°K`). |
| `timezone`         | Automatically detected if not explicitly set.    |
