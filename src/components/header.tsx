import Link from 'next/link';
import Image from 'next/image';
import logoSrc from '../images/pizza-logo.svg';
import dynamic from 'next/dynamic';

const DynamicMenu = dynamic(() => import('./menu'), { ssr: false })

export function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link href='/'>
          <div className="header__logo">
            <Image width="38" height="38" src={logoSrc} alt="Pizza logo" />
            <div>
              <h1>Online shop</h1>
              <p>The best pizza in world</p>
            </div>
          </div>
        </Link>
        <DynamicMenu />
      </div>
    </div>
  )
}
