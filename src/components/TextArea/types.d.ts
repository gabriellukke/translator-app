export type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  rows?: number;
  className?: string;
};
