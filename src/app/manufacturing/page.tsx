import { ManufacturingClient } from './ManufacturingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing Process | Khemji Wire',
  description: 'The Wire Galvanizing Process: From Mild Steel to Galvanized Wire. Discover our step-by-step hot dip galvanizing production line.',
};

export default function ManufacturingPage() {
  return <ManufacturingClient />;
}
