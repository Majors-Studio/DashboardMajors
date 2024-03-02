import React from 'react';

interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = ({label, type, placeholder, value, onChange}: LabelInputProps) => {
  return (
    <div className="w-screen flex flex-col">
      <label className="text-sm text-gray-500 mt-2">{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="
          max-w-sm
          p-2
          mt-1
          text-gray-900
          bg-gray-100
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-opacity-50
          transition
          duration-200
          ease-in-out
        "
      />
    </div>
)
}

export default LabelInput;