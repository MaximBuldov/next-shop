import classNames from 'classnames'
import React, { InputHTMLAttributes, forwardRef } from 'react'

interface IFields extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  error?: string
}

export const Input = forwardRef<HTMLInputElement, IFields>(({ label, className, type = 'text', error, ...rest }, ref) => {
  return (
    <div className="input-container">
      <label>
        <div className="input-label">{label}</div>
        <input
          type={type}
          ref={ref}
          className={classNames('input', className, {
            'error': !!error
          })}
          {...rest}
        />
      </label>
      {error && <div className="input-error">{error}</div>}
    </div>
  )
})

Input.displayName = 'Input';