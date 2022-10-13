import React from 'react';
import { TextAreaProps } from './types';

export default function TextArea({ value, onChange }: TextAreaProps) {
  return (
    <textarea
      className="-1/2 h-1/2 bg-white text-ballblue"
      placeholder="Digite aqui"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
