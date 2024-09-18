import { useState, FC, ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';

export interface IOption {
  value: string;
  label: string;
}

interface SelectorProps {
  options: IOption[];
  onSelect: (selectedValue: string) => void;
  ariaLabel: string;
  defaultOption: IOption;
  className?: string;
}

export const Selector: FC<SelectorProps> = ({
  options,
  onSelect,
  ariaLabel,
  defaultOption,
  className = '',
}) => {
  const [selectedCuisine, setSelectedCuisine] = useState('');

  const handleSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSelectedCuisine(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <Form.Group className={className}>
      <Form.Control
        as="select"
        value={selectedCuisine}
        onChange={handleSelectChange}
        aria-label={ariaLabel}
        className="form-select"
      >
        <option value={defaultOption.value}>{defaultOption.label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};
