// Initialize the dashboard
function init() {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      
      // Access the `names` field from the data
      let sampleNames = data.names;
  
      // Select the dropdown menu element
      let dropdown = d3.select("#selDataset");
  
      // Loop through the sample names and append an option for each
      sampleNames.forEach((sample) => {
        dropdown.append("option")
          .text(sample)       // Set the visible text to the sample ID
          .property("value", sample);  // Set the value to the sample ID
      });
  
      // Get the first sample from the list
      let firstSample = sampleNames[0];
  
      // Build the initial charts and metadata with the first sample
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Function to update the charts and metadata when a new sample is selected
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected and update charts/metadata
    buildCharts(newSample);
    buildMetadata(newSample);
  }
  
  // Function to build charts
  function buildCharts(sample) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      let samples = data.samples;
      
      // Filter the samples array for the desired sample ID
      let result = samples.filter(sampleObj => sampleObj.id == sample)[0];
  
      // Extract the necessary fields for the bar and bubble charts
      let otu_ids = result.otu_ids;
      let otu_labels = result.otu_labels;
      let sample_values = result.sample_values;
  
      // Create Bar Chart (Top 10 OTUs)
      let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
      let barData = [{
        x: sample_values.slice(0, 10).reverse(),
        y: yticks,
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h"
      }];
      let barLayout = { title: "Top 10 OTUs" };
      Plotly.newPlot("bar", barData, barLayout);
  
      // Create Bubble Chart
      let bubbleData = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: { size: sample_values, color: otu_ids, colorscale: "Earth" }
      }];
      let bubbleLayout = { title: "OTU Samples", xaxis: { title: "OTU ID" }, hovermode: "closest" };
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    });
  }
  
  // Function to build the metadata panel
  function buildMetadata(sample) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      let metadata = data.metadata;
  
      // Filter the metadata for the object with the desired sample number
      let result = metadata.filter(sampleObj => sampleObj.id == sample)[0];
  
      // Select the panel with id `#sample-metadata`
      let panel = d3.select("#sample-metadata");
  
      // Clear any existing metadata
      panel.html("");
  
      // Append new tags for each key-value pair in the filtered metadata
      Object.entries(result).forEach(([key, value]) => {
        panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    });
  }
  
  // Initialize the dashboard when the page loads
  init();
  
