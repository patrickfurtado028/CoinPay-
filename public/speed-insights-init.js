// Initialize Vercel Speed Insights
// This script loads and configures Speed Insights for the application

(function() {
  // Speed Insights initialization
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };

  // Load Speed Insights script
  // In production on Vercel, this will be automatically replaced with the correct path
  // For local development, this provides a fallback
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  
  script.onerror = function() {
    // Fallback: if Vercel's script is not available (local dev), we won't track
    console.log('Speed Insights: Running in development mode or not deployed on Vercel');
  };
  
  document.head.appendChild(script);
})();
