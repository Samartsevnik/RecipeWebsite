import { FC } from 'react';

interface ButtonProps {
  variant: string;
  text: string;
  type?: 'button' | 'submit';
  ariaLabel: string;
}

export const Button: FC<ButtonProps> = ({
  variant,
  text,
  type = 'button',
  ariaLabel,
}) => {
  return (
    <input
      type={type}
      value={text}
      className={`btn btn-${variant}`}
      aria-label={ariaLabel}
    />
  );
};
