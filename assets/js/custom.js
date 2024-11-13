// Create the anchor tag
var anchor = document.createElement('a');

// Get the current URL
var currentUrl = window.location.href;

// Extract the digits at the end of the URL (assuming they are after the last '/')
var regex = /\/(\d+-\d+-\d+)\/?$/;
var match = currentUrl.match(regex);

if (match && match[1]) {
    // Create the new URL for the CSV file
    var csvUrl = 'https://statinjm.github.io/sdg-jm-data/es/data/' + match[1] + '.csv';
    
    // Set anchor attributes
    anchor.href = csvUrl;
    anchor.download = match[1] + '.csv';
    anchor.title = 'Download source data as CSV';
    anchor.className = 'btn btn-primary btn-download';
    anchor.tabIndex = 0;
    anchor.textContent = 'Download Additional Indicators';

    // Add data attributes for tracking
    anchor.setAttribute('data-on', 'click');
    anchor.setAttribute('data-event-category', 'Downloads');
    anchor.setAttribute('data-event-action', 'Download CSV');
    anchor.setAttribute('data-event-label', 'Download Source CSV: ' + match[1]);
    
    // Append the anchor to the desired location
    document.getElementById("chartSelectionDownload").appendChild(anchor);
} else {
    console.error('No valid digits found in the URL');
}