import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean,
}

export const Button = ({ className, outline, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}
