import { BAR_TYPES, PLATE_WEIGHTS } from '../constants';

// Bar type based on constants
export type BarType = keyof typeof BAR_TYPES;

// Plate weight type based on available plates
export type PlateWeight = (typeof PLATE_WEIGHTS)[number];

// Plate count interface - maps each plate weight to its quantity
export interface PlateCounts {
  [key: number]: number;
}

// Component props interfaces
export interface BarSelectorProps {
  selectedBar: BarType;
  onBarChange: (barType: BarType) => void;
}

export interface PlateRowProps {
  weight: PlateWeight;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export interface TotalDisplayProps {
  totalWeight: number;
  onClear: () => void;
}