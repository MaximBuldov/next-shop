import { MainLayout } from '@/layouts'
import React from 'react'

export default function NotFound() {
  return (
    <MainLayout
      title='404 - Not Found'
      description='404 - Not Found'
    >
      <div className='not-found'>
        404
      </div>
    </MainLayout>
  )
}
