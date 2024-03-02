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
    <div className="flex flex-col">
      <label className="text-sm text-white my-4">{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="
          max-w-sm
          py-2
          px-3
          mt-1
          text-white
          rounded-lg
          transition
          duration-200
          ease-in-out
          bg-transparent
          ring
         border-white
          focus:outline-none
          focus:ring-2
          focus:ring-purple-600
        "
      />
    </div>
)
}

export default LabelInput;