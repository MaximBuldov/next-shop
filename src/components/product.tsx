import { AttributeType, IProduct, IVariation } from '@/models'
import React, { useMemo, useState } from 'react'
import Image from 'next/image';
import { ProductOptions } from './product-options';
import { CatalogButton } from './catalog-button';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import cartStore from '@/store/cart-store';
import variationsService from '@/services/variation.service';
import { Loader } from './loader';

export default function Product({ product }: { product: IProduct }) {
  const { images, name, price, attributes, id, variations: varArr } = product;
  const { pathname } = useRouter();
  const [selectedSize, setSelectedSize] = useState(defaultOption(AttributeType.SIZE));
  const [selectedType, setSelectedType] = useState(defaultOption(AttributeType.TYPE));
  const [variations, setVariations] = useState<IVariation[] | null>(null);
  const [fetched, setFetch] = useState(false);

  const selectedVariation = useMemo(() => {
    return variations?.find((el) => el.attributes[0].option === selectedSize);
  }, [selectedSize, variations, pathname])

  const { isFetching } = useQuery({
    queryKey: ['products', id, { pathname }],
    queryFn: () => variationsService.getVariations(id),
    enabled: fetched,
    staleTime: Infinity,
    onSuccess: (data: IVariation[]) => setVariations(data)
  })

  const handleOption = (value: string, name: string) => {
    if (name === AttributeType.SIZE) {
      setSelectedSize(value);
      setFetch(true);
    } else {
      setSelectedType(value)
    }
  }

  const addTocart = () => {
    cartStore.addToCart({
      product_id: id,
      variation_id: selectedVariation ? Number(selectedVariation?.id) : varArr[0],
      quantity: 1,
      price: selectedVariation ? Number(selectedVariation.price) : Number(price),
      image: images[0].src,
      size: selectedSize,
      type: selectedType,
      name
    })
  }

  return (
    <div className="pizza-block">
      <Image
        className="pizza-block__image"
        src={images[0].src}
        alt={name}
        width="260"
        height="260"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        {attributes.map(attr => <ProductOptions
          key={attr.name}
          attributes={attr}
          onSelect={handleOption}
          defaultOption={attr.name === AttributeType.SIZE ? selectedSize : selectedType}
        />)}
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          {renderPrice()}
        </div>
        <CatalogButton onClick={addTocart} id={id} />
      </div>
    </div>
  )

  function defaultOption(name: string) {
    return attributes.find(attr => attr.name === name)!.options[0];
  }

  function renderPrice() {
    if (isFetching) {
      return <Loader size={40} />;
    }
    if (selectedVariation) {
      return `$${selectedVariation.price}`
    }

    return `$${price}`
  }
}
