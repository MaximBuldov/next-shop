import { removeTokensStorage } from '@/services/auth'
import userStore from '@/store/user-store'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import React from 'react'
import SmallCart from './small-cart';
import { observer } from 'mobx-react';

const DynamicCart = dynamic(() => import('./small-cart'), { ssr: false });

interface MenuList {
  label: string,
  href?: string,
  onClick?: () => void
}

const Menu = observer(() => {
  const privateRoutes: MenuList[] = [
    {
      label: 'My orders',
      href: '/orders'
    },
    {
      label: 'Logout',
      onClick: () => {
        userStore.clearStore();
      }
    }
  ];

  const publicRoutes: MenuList[] = [
    {
      label: 'Login',
      href: '/login'
    }
  ]
  return (
    <div className="menu-container">
      <div className="menu">
        <ul>
          {userStore.data ?
            privateRoutes.map(renderMenuItem) :
            publicRoutes.map(renderMenuItem)
          }
        </ul>
      </div>
      <SmallCart />
    </div>
  )

  function renderMenuItem(el: MenuList) {
    return (
      <li key={el.label}>
        {el.href ?
          <Link href={el.href}>{el.label}</Link> :
          el.onClick ? <span onClick={el.onClick}>{el.label}</span> :
            el.label
        }
      </li>
    )
  }
})

export default Menu;
