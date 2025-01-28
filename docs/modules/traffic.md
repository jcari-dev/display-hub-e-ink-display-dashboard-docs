---
sidebar_position: 4
---

# Traffic Incidents

![News Headlines Module](https://jcari-dev.github.io/display-hub-e-ink-display-dashboard-docs/img/traffic_module_sample.jpg)


<p style={{ textAlign: 'right', fontStyle: 'italic' }}>Traffic Incidents module displaying a traffic event near the 02131 zipcode.</p>

### Overview

The Traffic Incidents module it is by far the most complex module. It provides real-time traffic updates for a specified location using the [TomTom Traffic API](https://www.tomtom.com/products/traffic-apis/). The module's display is a **1x3 rectangle**.

**Note:** Only US ZIP codes are supported as of now. 

----

### Web GUI View
![Weather Forecast Module](/img/traffic_module.png)

----

### Information Displayed


The module presents the following details:  
 - **Traffic Event**: Example: "Heavy Traffic Near" (the word "Near" indicates an approximate location).
   - This is a list of all the following traffic events:
     - Accident
     - Fog
     - Hazardous Road
     - Rain
     - Ice
     - Jam
     - Lane Closed
     - Road Closed
     - Road Works
     - Narrow Lanes
     - Tow Trucks
     - Other

 - **Street Address**: Example: 520 South St.
 - **City, State, Zipcode**: Example: Roslindale, MA 02131.

----

### Usage

1. Click the "**Select a Module:**" dropdown at the top of the web GUI and select the "**Traffic**" module.
2. Click the green "**Add Module**" button to the right of the dropdown.
3. Drag and drop the module to your desired position within the grid.
4. Enter a valid US ZIP code in the **"Enter a ZIP Code"** field.  
5. Click **"Save Weather Settings"**:  
   - A green confirmation message will appear if the settings are saved successfully.  
   - A red error message will indicate a failure. 
6. Click the **"Generate API File"** button and follow the instructions:
 ![Generate API File Traffic Module](/img/traffic_module_generate_api_file.png)

7. Click the **"Consume API File"** button and follow the instructions:
 ![Generate API File Traffic Module](/img/traffic_module_consumed_api_file.png)

8. Click **"Update Display"**:  
   - The screen will blink (indicating a cleaning sequence) and display the updated configuration.

----

### Workflow

The Traffic Incidents module retrieves real-time traffic data based on user settings stored in the database.

1. **Retrieve Settings**:  
   The module pulls the user’s API key and selected ZIP code from the database (`TrafficSettings` table).  

2. **ZIP Code Conversion**:  
   The ZIP code is converted into latitude and longitude coordinates using a local dataset (`US.txt`).  

3. **Define Bounding Box**:  
   A small bounding box around the derived coordinates is calculated to narrow the area for traffic incident queries.  

4. **API Request**:  
   The TomTom API is queried with the bounding box, filtering incidents based on specific categories such as accidents, road closures, or heavy traffic.  

5. **Response Handling**:  
   The API's response is processed to extract incident details, including category and coordinates.  

6. **Reverse Geocoding**:  
   Incident coordinates are reverse-geocoded to obtain human-readable addresses.  

7. **Address Formatting**:  
   Addresses are abbreviated for better readability, and incidents are compiled into a list for display.
     - As of now only one which is randomly selected is used for the screen.
