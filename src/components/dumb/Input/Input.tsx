import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import './Input.scss';

interface IProps {
  name: string;
  labelText: string;
  onChange?: any;
  inputRef?: any;
  type?: string;
  error?: boolean;
  disabled?: boolean;
  errorText?: string;
  pattern?: string;
  className?: string;
  defaultValue?: any;
  autoComplete?: boolean;
  placeholder?: string;
}

const Input: FunctionComponent<IProps> = props => {
  const {
    name,
    disabled,
    placeholder,
    defaultValue,
    autoComplete,
    error,
    errorText,
    labelText,
    className,
    inputRef,
    onChange,
    pattern
  } = props;

  // updates
  const [type, setType] = useState(props.type ? props.type : 'text');
  const [value, setValue] = useState(defaultValue ? defaultValue : '');
  const updateType = () => setType(type === 'text' ? 'password' : 'text');
  const updateValue = (value: string) => setValue(value);

  // component helpers
  const InputSpan = () => <span className={type === 'password' ? 'toggle' : 'toggle text'} onClick={() => updateType()}></span>;
  const InputLabel = () => <label className={value || placeholder ? 'label active' : 'label'}>{labelText}</label>;
  const InputError = () => <p className={error ? 'message error' : 'message'}>{errorText}</p>;

  return (
    <div className={`wrapper ${className}`}>
      <input
        type={type}
        value={value}
        name={name}
        ref={inputRef}
        pattern={pattern ? pattern : undefined}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
          updateValue(e.target.value);
        }}
        className={error ? 'input error' : 'input'}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete === false ? 'off' : ''}
      />
      <InputLabel />
      {error && <InputError />}
      {props.type === 'password' && <InputSpan />}
    </div>
  );
};

export default Input;
