import { ProductsList } from '@/components'
import { ShopLayout } from '@/layouts'
import { CatalogProps } from '@/models'
import catService from '@/services/category.service'
import productsService from '@/services/products.service'
import { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage<CatalogProps> = ({ cats, products }) => {
  return (
    <ShopLayout
      title="Online Shop"
      description="The best pizza in world"
      cats={cats}
      activeCategory={'0'}
    >
      <ProductsList products={products} />
    </ShopLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cats = await catService.getAll();
  const products = await productsService.getAll();

  return { props: { cats, products }, revalidate: 60000 }
}

export default HomePage;