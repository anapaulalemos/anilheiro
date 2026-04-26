// Conversion factor from kg to lb
export const KG_TO_LB_FACTOR = 2.20462;

// Bar weights in kg
export const BAR_WEIGHTS = {
  FEMININA: 15,
  MASCULINA: 20,
} as const;

// Available plates in kg (easy to edit for future additions/removals)
export const PLATE_WEIGHTS = [1, 2.2, 4.5, 5, 10, 11.3, 15, 20, 25] as const;

// Olympic plate colors according to IWF standards
export const PLATE_COLORS = {
  25: '#E53E3E', // Red
  20: '#3182CE', // Blue
  15: '#D69E2E', // Yellow/Gold
  11.3: '#38A169', // Green
  10: '#38A169', // Green
  5: '#A0AEC0', // Light gray/white
  4.5: '#2D3748', // Black
  2.2: '#63B3ED', // Light blue
  1: '#2D3748', // Black
} as const;

// Bar types
export const BAR_TYPES = {
  FEMININA: 'FEMININA',
  MASCULINA: 'MASCULINA',
} as const;