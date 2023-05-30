import React from 'react';

type ButtonProps = {
  styles?: string;
};

function Button({ styles }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary text-[18px] outline-none rounded-lg`}
    >
      Get Started
    </button>
  );
}

export default Button;
