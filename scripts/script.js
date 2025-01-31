document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!"); // Debugging

    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (!toggleButton) {
        console.error("Dark mode button not found!");
        return; // Stop execution if the button is missing
    }

    console.log("Dark mode button found!");

    // Check if dark mode was enabled before
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    }

    toggleButton.addEventListener("click", function () {
        console.log("Dark mode button clicked!");

        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.textContent = "☀️";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.textContent = "🌙";
        }
    });
});
