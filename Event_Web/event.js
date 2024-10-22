// Add click event to the "Let's Go" button to display the dashboard
document.getElementById("letsGoBtn").addEventListener("click", function() {
    document.querySelector(".background").style.display = "none";  // Hide background section
    document.getElementById("dashboard").classList.remove("hidden");  // Show dashboard
    document.getElementById("dashboard").classList.add("show");
});
