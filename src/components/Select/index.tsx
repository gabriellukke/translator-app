import React from 'react';
import { Languages } from '../types';

type SelectProps = {
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Languages[];
  className?: string;
};

export default function Select({
  name,
  id,
  onChange,
  options,
  className,
}: SelectProps) {
  return (
    <select className={className} name={name} id={id} onChange={onChange}>
      {options?.map((option) => (
        <option key={option.code} value={option.code}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
