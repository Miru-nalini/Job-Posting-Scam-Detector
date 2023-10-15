// content.js

// Function to extract job data from the web page
function extractJobData() {
  const jobTitles = document.querySelectorAll(".jobTitle");
  const jobDescriptions = document.querySelectorAll(".jobDescription");
  const minPay = document.querySelectorAll(".minPay");
  const maxPay = document.querySelectorAll(".maxPay");
  const clientLocation = document.querySelectorAll(".clientLocation");
  const clientMembership = document.querySelectorAll(".clientMembership");
  const clientIdentityVerification = document.querySelectorAll(
    ".clientIdentityVerification"
  );
  const clientPaymentVerification = document.querySelectorAll(
    ".clientPaymentVerification"
  );
  const deposit = document.querySelectorAll(".deposit");
  const emailVerification = document.querySelectorAll(".emailVerification");
  const profileCompletion = document.querySelectorAll(".profileCompletion");
  const phoneVerification = document.querySelectorAll(".phoneVerification");

  const jobs = [];

  for (let i = 0; i < jobTitles.length; i++) {
    const job = {
      minPay: minPay[i].textContent,
      maxPay: maxPay[i].textContent,
      clientIdentityVerification: clientIdentityVerification[i].textContent,
      clientPaymentVerification: clientPaymentVerification[i].textContent,
      deposit: deposit[i].textContent,
      emailVerification: emailVerification[i].textContent,
      profileCompletion: profileCompletion[i].textContent,
      phoneVerification: phoneVerification[i].textContent,
    };

    jobs.push(job);
  }

  return jobs;
}

// Send the extracted data to the background script
chrome.runtime.sendMessage({ jobData: extractJobData() });
