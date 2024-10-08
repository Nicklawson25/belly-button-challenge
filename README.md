###### Belly Button Biodiversity Dashboard
This project creates an interactive dashboard to explore the microbial species found in the navels of different individuals. It provides visualizations of the top 10 OTUs (Operational Taxonomic Units) found in each individual’s sample, as well as detailed metadata about the selected sample. The dashboard is built using JavaScript, D3, and Plotly.

##### Project Overview
The Belly Button Biodiversity dashboard allows users to:

Select a sample ID from a dropdown menu.
View a bar chart of the top 10 OTUs found in the selected sample.
Explore a bubble chart of all OTUs found in the sample.
Display metadata about the selected individual (age, gender, location, etc.).
##### Features
Dropdown Menu: Allows users to select a sample ID to update the charts and metadata.
Bar Chart: Displays the top 10 OTUs found in the selected sample.
Bubble Chart: Visualizes the distribution of all OTUs found in the sample.
Metadata Panel: Displays demographic information about the individual associated with the sample.
##### Technologies Used
D3.js: For fetching and processing data.
Plotly.js: For creating interactive bar and bubble charts.
HTML/CSS: For structuring and styling the web page.
##### How to Run
Clone the repository.
Open index.html in your browser to load the dashboard.
Use the dropdown menu to select different sample IDs and explore the data.
##### File Structure
index.html: Contains the HTML structure and references to the scripts.
app.js: Contains the JavaScript code to fetch data, build the charts, and update the metadata.
samples.json: Contains the data used in the dashboard (including OTU IDs, labels, sample values, and metadata).
##### How It Works
Initialization: When the page loads, the init() function fetches the samples.json data, populates the dropdown menu, and displays the charts and metadata for the first sample.
Dropdown Interaction: When a new sample is selected from the dropdown, the optionChanged() function is triggered, which updates the charts and metadata based on the selected sample.
Charts and Metadata: The buildCharts() and buildMetadata() functions are responsible for building the bar and bubble charts as well as updating the metadata panel with the demographic information for the selected sample.
##### Deployment
To deploy this project:

Host the files on a static hosting service like GitHub Pages or Netlify.
Make sure the data and scripts are proper
