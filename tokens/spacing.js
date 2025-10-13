const rootStyles = getComputedStyle(document.documentElement);
const spacingFromCSS = {
xxs: parseInt(rootStyles.getPropertyValue('--spacing-xxs')),
xs: parseInt(rootStyles.getPropertyValue('--spacing-xs')),
sm: parseInt(rootStyles.getPropertyValue('--spacing-sm')),
md: parseInt(rootStyles.getPropertyValue('--spacing-md')),
lg: parseInt(rootStyles.getPropertyValue('--spacing-lg')),
xl: parseInt(rootStyles.getPropertyValue('--spacing-xl')),
xxl: parseInt(rootStyles.getPropertyValue('--spacing-xxl')),
xxxl: parseInt(rootStyles.getPropertyValue('--spacing-xxxl')),
};
