import React from 'react'
import { Button } from './button'
import { observer } from 'mobx-react';
import cartStore from '@/store/cart-store';

interface CatalogButtonProps {
  onClick: () => void,
  id: number
}

export const CatalogButton = observer(({ onClick, id }: CatalogButtonProps) => {
  const count = cartStore.getSingleProductsCount(id);
  return (
    <Button
      onClick={onClick}
      className="button--add"
      outline
    >
      <span>+ Add</span>
      {count > 0 && <i>{count}</i>}
    </Button>
  )
})
