// 🧩 Get CSS variable
function getCSSVariable(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// 🧩 Set CSS variable
function setCSSVariable(name, value) {
  document.documentElement.style.setProperty(name, value);
}

// Example: Log current desktop padding
console.log("Desktop horizontal padding:", getCSSVariable("--button-padding-horizontal-desktop"));

// Example: Change mobile padding dynamically (if user enables 'compact mode')
setCSSVariable("--button-padding-horizontal-mobile", "12px");
setCSSVariable("--button-padding-vertical-mobile", "6px");
