document.querySelector(".copy-btn").addEventListener("click", function() {
    navigator.clipboard.writeText("Your script here...").then(() => {
        alert("✅ Script copied to clipboard!");
    }).catch(() => {
        alert("❌ Failed to copy the script.");
    });
});
