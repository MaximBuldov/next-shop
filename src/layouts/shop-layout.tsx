import { Categories } from '@/components'
import React, { FC, PropsWithChildren } from 'react'
import { MainLayout } from './main-layout'
import { ICat, IMeta } from '@/models'

interface ShopLayoutProps extends PropsWithChildren<IMeta> {
  cats: ICat[];
  activeCategory: string;
}

export const ShopLayout: FC<ShopLayoutProps> = ({ children, title, description, cats, activeCategory }) => {
  return (
    <MainLayout
      title={title}
      description={description}
    >
      <div className="container">
        <div className="content__top">
          <Categories cats={cats} activeCategory={activeCategory} />
          {/* <SortPopup items={sortNames} onSelectSortType={onSelectSortType} activeSortBy={sortBy}/> */}
        </div>
        <h2 className="content__title">
          {title}
        </h2>
        <div className="content__items">
          {children}
        </div>
      </div>
    </MainLayout>
  )
}
