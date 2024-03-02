import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const Button: React.FC<ButtonProps> = ({label}) => {
    return <button className="bg-blue-500 text-white p-2 rounded-lg w-full text-sm md:max-w-sm mt-5">{label}</button>;
}

export default Button;