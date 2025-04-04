// Copy Script Button
document.querySelector(".copy-btn").addEventListener("click", function() {
    navigator.clipboard.writeText('loadstring(game:HttpGet("https://pastebin.com/raw/7iM0y82d"))()').then(() => {
        alert("✅ Script copied to clipboard!");
    }).catch(() => {
        prompt("❌ Clipboard not supported. Manually copy:", 'loadstring(game:HttpGet("https://pastebin.com/raw/7iM0y82d"))()');
    });
});

// Auto Button (Copies Auto Script)
document.querySelector(".auto-btn").addEventListener("click", function() {
    navigator.clipboard.writeText('loadstring(game:HttpGet("https://raw.githubusercontent.com/iwantsom3/script/refs/heads/main/Autofarm%20ice"))()').then(() => {
        alert("✅ AutoFarm 🌸 Script copied to clipboard!");
    }).catch(() => {
        prompt("❌ Clipboard not supported. Manually copy:", 'loadstring(game:HttpGet("https://raw.githubusercontent.com/iwantsom3/script/refs/heads/main/Autofarm%20ice"))()');
    });
});

// High Tier Pets Button (Shows List of Pets)
document.querySelector(".high-tier-btn").addEventListener("click", function() {
    alert("🐉 Adopt Me High Tier Pets:\n- Shadow Dragon\n- Frost Dragon\n- Bat Dragon\n- Giraffe\n- Owl\n- Mega Unicorn\n- Parrot\n- Blazing Lion\n- Mega Turtle\n- Evil Unicorn\n- Mega Kangaroo\n- Strawberry Batdragon\n- Arctic Reindeer\n- Neon Blue dog\n- Mega Frost fury\n- Giraffe\n- Owl\n- Crow\n- Etc");
});

// Best Executor (Mobile) Button (Redirects to Delta Exploits)
document.querySelector(".executor-btn").addEventListener("click", function() {
    window.open("https://deltaexploits.gg", "_blank");
});
