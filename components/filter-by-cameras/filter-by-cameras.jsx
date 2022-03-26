import OneFilterByCamera from '../one-filter-by-camera/one-filter-by-camera'

// Component containing a list of filters by brand
const FilterByCameras = ({ filterByBrands, brands, setBrands }) => {
  // The function responsible for rewriting the value of the
  // pseudo-element into the brand state
  function setPseudoBrands(value) {
    const brandIndex = pseudoBrands.indexOf(value)

    // If the index was not found in the pseudo-array for the passed value,
    // then it writes the passed value to the pseudo-array, otherwise, it
    // deletes it from there
    if (brandIndex == -1) {
      pseudoBrands.push(value)
    } else {
      pseudoBrands.splice(brandIndex, 1)
    }

    setBrands(pseudoBrands)
  }

  // A pseudo-variable in which the value of the filter of the
  // selected brand is written, in order to then overwrite the
  // value in the brand state.
  const pseudoBrands = brands ? brands : []

  return (
    <ul className="filter-by-cameras">
      {filterByBrands &&
        filterByBrands.items.map((item, i) => {
          return (
            <OneFilterByCamera
              key={i}
              title={item.title}
              value={item.value}
              setPseudoBrands={setPseudoBrands}
            />
          )
        })}
    </ul>
  )
}

export default FilterByCameras
