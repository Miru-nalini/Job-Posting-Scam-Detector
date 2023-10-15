// background.js

// Define a function to handle incoming messages from content.js
function handleMessage(request, sender, sendResponse) {
  if (request.jobData) {
    // Received job data from content.js
    const jobData = request.jobData;

    // Perform scam analysis or further processing of job data here
    // You can add your analysis logic in this section

    // For now, let's just log the received data
    console.log("Received job data:", jobData);
  }
}

// Add a listener for incoming messages from content.js
chrome.runtime.onMessage.addListener(handleMessage);
