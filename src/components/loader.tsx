import classNames from 'classnames'
import React from 'react'

interface LoaderProps {
  size: number,
  fullWidth?: boolean
}

export const Loader = ({ size, fullWidth }: LoaderProps) => {
  return <div
    className={classNames('loader', {
      'loader-full-width': fullWidth
    })}
    style={{
      width: size,
      height: size
    }}
  />
}
