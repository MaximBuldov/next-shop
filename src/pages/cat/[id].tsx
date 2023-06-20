import { ProductsList } from '@/components';
import { ShopLayout } from '@/layouts';
import { CatalogProps, ICat } from '@/models';
import catService from '@/services/category.service';
import productsService from '@/services/products.service';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react'

interface Params extends ParsedUrlQuery {
  id: string;
}

const CategoryPage: NextPage<CatalogProps> = ({ cats, products, activeCat }) => {
  const title = cats.find(cat => cat.id === Number(activeCat))?.name;

  return (
    <ShopLayout
      cats={cats}
      title={title || 'Not Found'}
      activeCategory={activeCat}
    >
      <ProductsList products={products} />
    </ShopLayout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const cats = await catService.getAll();

  return {
    paths: cats.map((cat: ICat) => ({ params: { id: cat.id.toString() } })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cats = await catService.getAll();
  const products = params?.id ?
    await productsService.getByCatId((String(params.id))) :
    [];

  return { props: { cats, products, activeCat: params?.id } }
}



export default CategoryPage;
