import React from 'react';
import { TextAreaProps } from './types';

export default function TextArea({ value, onChange }: TextAreaProps) {
  return (
    <textarea
      className="w-1/2 p-2 bg-white shadow-lg rounded-bl-lg text-2xl resize-none"
      placeholder="Digite aqui"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
