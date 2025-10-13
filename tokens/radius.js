// Read radius values dynamically from CSS variables
const rootStyles = getComputedStyle(document.documentElement);

const radius = {
  sm: parseInt(rootStyles.getPropertyValue('--radius-sm')),
  md: parseInt(rootStyles.getPropertyValue('--radius-md')),
  lg: parseInt(rootStyles.getPropertyValue('--radius-lg')),
};

// Example usage
document.querySelector('.button').style.borderRadius = `${radius.md}px`;
