---
sidebar_position: 2
---

# News Headlines

![News Headlines Module](https://jcari-dev.github.io/display-hub-e-ink-display-dashboard-docs/img/news_module_sample.jpg)

<p style={{ textAlign: 'right', fontStyle: 'italic' }}>News Headlines module showing English The New York Times, Science headlines via RSS feed.</p>

### Overview

The News Headlines module displays news updates from a chosen news outlet via an RSS feed. This module's display format is a **1x3 rectangle**.

----

### Web GUI View
![News Headlines Module GUI](/img/news_module.png)

----

### Information Displayed

The module presents the following details:  
- **News Headline**: A headline retrieved from the news outlet's RSS feed. Headlines exceeding 55 characters are truncated.  
- **Timestamp**: The publication time of the article, displayed in military format.

----

### Usage

1. Click the "**Select a Module:**" dropdown at the top of the web GUI and select the "**News**" module.
2. Click the green "**Add Module**" button to the right of the dropdown.
3. Drag and drop the module to your desired position within the grid.
4. Choose a language from the **"Select a Language"** dropdown.  
5. Pick a news outlet from the **"Select News Outlet"** dropdown.  
6. Select an RSS feed from the **"Pick an RSS Feed"** dropdown.  
7. Click **"Save News Settings"**:  
   - A green confirmation message will appear if the settings are saved successfully.  
   - A red error message will indicate a failure.  
8. Click **"Update Display"**:  
   - The screen will blink (indicating a cleaning sequence) and display the updated configuration.

----

### Workflow

1. **Retrieve Settings**:  
   The module pulls the selected language, news outlet, and RSS feed settings from the database (`NewsSettings` table). 

2. **Fetch RSS Feed**:  
   It accesses the chosen RSS feed using the saved settings.  

3. **Process Articles**:  
   Articles from the feed are parsed, and one is randomly selected. Its headline and publication time are extracted.  

4. **Display on Screen**:  
   The selected article's headline and timestamp are rendered on the module's display.  
