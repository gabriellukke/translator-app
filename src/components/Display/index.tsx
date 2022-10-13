import React from 'react';
import { DisplayProps } from './types';

export default function Display({ text }: DisplayProps) {
  return (
    <div className="w-1/2 h-1/2 p-2 bg-white shadow-lg rounded-lg text-2xl">
      {text}
    </div>
  );
}
