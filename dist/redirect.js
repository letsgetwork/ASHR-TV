// Check if the current URL is not the target URL
if (window.location.href !== "https://ashrtv.my.id/") {
  // Redirect after 3 seconds
  setTimeout(function() {
    window.location.href = "https://ashrtv.my.id/";
  }, 3000);
}