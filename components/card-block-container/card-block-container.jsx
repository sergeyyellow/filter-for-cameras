import OneProductCard from '../one-product-card/one-product-card'

// Component containing all product cards
const CardBlockContainer = ({ products }) => {
  // If, when accessing the server for data, the array with
  // products is returned empty, then the variable will be
  // assigned the value "false" and a record will be displayed
  // on the page notifying the user that the product was not found on request
  let productAvailability = true

  if (!products.length) {
    productAvailability = false
  }

  return (
    <>
      {!productAvailability && (
        <p className="product-not-found-text">
          Товаров по вашему запросу не найдено...
        </p>
      )}
      <div className="card-block-container">
        {products &&
          products.map((item, i) => {
            return (
              <OneProductCard
                key={i}
                image={item.image.desktop.x1}
                title={item.title}
                price={Math.round(item.price)}
                // The variable contains information about whether the item is new
                isNew={item.is_new}
              />
            )
          })}
      </div>
    </>
  )
}

export default CardBlockContainer
