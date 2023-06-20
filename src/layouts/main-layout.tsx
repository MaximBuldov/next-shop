import { Header, Meta } from '@/components'
import React, { FC, PropsWithChildren } from 'react'
import { Ubuntu } from 'next/font/google'
import { IMeta } from '@/models'

const ubuntu = Ubuntu({ weight: ['300', '400', '700'], subsets: ['latin'] })

export const MainLayout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <div className="wrapper" style={ubuntu.style}>
        <Header />
        <div className="content">
          {children}
        </div>
      </div>
    </Meta>
  )
}
