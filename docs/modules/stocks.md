---
sidebar_position: 4
---

# Stock Prices

<img src="https://jcari-dev.github.io/display-hub-e-ink-display-dashboard-docs/img/stocks_module_sample.jpg" alt="Description" class="module-images" />


<p style={{ textAlign: 'right', fontStyle: 'italic' }}>Stock Prices module displaying the current Nvidia (NVDA) stock price and the change (%) since previous close.</p>

### Overview

The Stock Prices module displays information about the selected ticket (stock). The module's display is a compact 1x1 square:

----
### Web GUI View

![News Forecast Module](/img/stocks_module.png)

----


### Information Displayed


The module presents the following information:
- **Stock Current Price**: The current stock price, as retrieved from yfinance.
- **Change (%) Since Previous Close**: The percentage change in price since the previous day's closing price.
  - **Formula:** `((current_price - previous_close) / previous_close) * 100`
  - **Note:** The percentage change may vary across financial platforms (e.g., Google and Yahoo often display different daily percentage changes). This module replicates Yahoo Finance's calculations.

----

### Usage

1. Click the "**Select a Module:**" dropdown at the top of the web GUI and select the "**Stocks**" module.
2. Click the green "**Add Module**" button to the right of the dropdown.
3. Drag and drop the module to your desired position within the grid.
4. Enter a valid ticker symbol in the "**Enter a Ticker**" field.
5. Click "**Save Stock Settings**". If successful, a green message will confirm the settings were saved. If not, a red message will indicate the failure.
6. Click "**Update Display**". The screen will blink (indicating a cleaning sequence) and display the updated module configuration.

----

### Workflow

The Stock Prices module retrieves real-time financial data based on user settings stored in the database, such as ticker of choice.  

1. **Retrieve Settings**:  
   The module pulls the ticker of choice from the database.  

2. **API Request**:  
   Through `yfinance` a request is made to get information about the stock.    

4. **Response Handling**:  
   The API's response is parsed to extract the current price and calculate the price difference from the current price and the previous close price for display.  
