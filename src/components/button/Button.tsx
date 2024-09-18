import { FC } from 'react';

interface ButtonProps {
  variant: string;
  text: string;
  type?: 'button' | 'submit';
}

export const Button: FC<ButtonProps> = ({ variant, text, type = 'button' }) => {
  return <input type={type} value={text} className={`btn btn-${variant}`} />;
};
