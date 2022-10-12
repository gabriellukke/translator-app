import React from 'react';
import { DisplayProps } from './types';

export default function Display({ text, className }: DisplayProps) {
  return <div className={className}>{text}</div>;
}
