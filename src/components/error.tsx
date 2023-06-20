import React from 'react'

interface ErrorProps {
  message: string
}

export const ErrorMessage = ({ message }: ErrorProps) => {
  return (
    <div className="error">{message}</div>
  )
}
