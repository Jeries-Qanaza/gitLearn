// Load feature scripts
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}

// Load all feature files
loadScript('design_script.js');

function getNewName()
{
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const randomIndex = Math.floor(Math.random() * names.length);
    const newName = names[randomIndex];
    document.querySelector(".card h1 span").textContent = newName;
}