import { useState } from 'react'

import FilterByPrice from '../filter-by-price/filter-by-price'
import FilterByCameras from '../filter-by-cameras/filter-by-cameras'

// Component containing all available filters
const FilterBlock = ({
  data,
  setMinPrice,
  setMaxPrice,
  brands,
  setBrands,
  setDataUpdated,
}) => {
  // These hooks are responsible for the possibility of applying
  // the filter only if all data is entered correctly
  const [lockedMinPrice, setLockedMinPrice] = useState(false)
  const [lockedMaxPrice, setLockedMaxPrice] = useState(false)

  return (
    <div className="filter-block">
      <p className="total-goods-text">Товаров: {data.products.length}</p>
      <p className="cameras-text">{data.categories[1].title}</p>

      <div className="price-block">
        <p className="text">Цена, ₽</p>

        <FilterByPrice
          minPrice={data.filters[0].min}
          maxPrice={data.filters[0].max}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setLockedMinPrice={setLockedMinPrice}
          setLockedMaxPrice={setLockedMaxPrice}
        />
      </div>

      <div className="brand-block">
        <p className="text">Бренд</p>

        <FilterByCameras
          filterByBrands={data.filters[3]}
          brands={brands}
          setBrands={setBrands}
        />
      </div>

      <p
        className={
          lockedMinPrice || lockedMaxPrice ? 'btn-apply locked' : 'btn-apply'
        }
        onClick={() =>
          !lockedMinPrice && !lockedMaxPrice ? setDataUpdated(true) : ''
        }
      >
        Применить
      </p>
    </div>
  )
}

export default FilterBlock
