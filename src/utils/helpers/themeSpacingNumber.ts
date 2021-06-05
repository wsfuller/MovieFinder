/** This takes theme.spacing, which for example looks like '32px', and returns only the number (as per the example 32). */
const themeSpacingNumber = (themeSpacing: string): number => Number(themeSpacing.replace('px', ''));

export default themeSpacingNumber;
