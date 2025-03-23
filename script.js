document.querySelector(".copy-btn").addEventListener("click", function() {
    navigator.clipboard.writeText("Your script here...").then(() => {
        alert("✅ Script copied to clipboard!");
    }).catch(() => {
        prompt("❌ Clipboard not supported. Manually copy:", "Your script here...");
    });
});
