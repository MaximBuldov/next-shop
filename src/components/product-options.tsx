import { AttributeType, IAttributes } from '@/models'
import classNames from 'classnames';
import React from 'react'

interface ProductOptionsProps {
  attributes: IAttributes;
  onSelect: (option: string, name: string) => void;
  defaultOption: string;
}

export const ProductOptions = ({ attributes, onSelect, defaultOption }: ProductOptionsProps) => {
  const isSizeOptions = attributes.name === AttributeType.SIZE
  const optionList = isSizeOptions ? ['10', '12', '16'] : ['thin', 'classic'];

  return (
    <ul>
      {optionList.map((option) => (
        <li
          key={option}
          onClick={() => onSelect(option, attributes.name)}
          className={classNames({
            'active': defaultOption === option,
            'disable': !attributes.options.includes(option)
          })}
        >
          {renderOption(option)}
        </li>
      ))}
    </ul>
  )

  function renderOption(option: string) {
    if (isSizeOptions) {
      return <>{`${option} inch`}</>
    }
    return option;
  }
}
