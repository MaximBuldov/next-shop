import { IMeta } from '@/models'
import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'

export const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description ?
          <meta name='description' content={description} /> :
          <meta name='robots' content='noindex, nofollow' />
        }
      </Head>
      {children}
    </>
  )
}
