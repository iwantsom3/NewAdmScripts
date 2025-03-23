document.getElementById("androidBtn").addEventListener("click", function() {
    alert("Android script loaded!");
});

document.getElementById("iosBtn").addEventListener("click", function() {
    alert("iPhone script loaded!");
});

document.querySelector(".copy-btn").addEventListener("click", function() {
    navigator.clipboard.writeText("Your script here...").then(() => {
        alert("Script copied to clipboard!");
    });
});

document.querySelector(".discord-btn").addEventListener("click", function() {
    window.location.href = "https://discord.gg/yourserver";
});
