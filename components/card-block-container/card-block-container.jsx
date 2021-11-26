import OneProductCard from "../one-product-card/one-product-card";

// Component containing all product cards
const CardBlockContainer = ({ products }) => {
    return (
        <div className="card-block-container">
            {products && products.map((item, i) => {
                return <OneProductCard
                    key={i}
                    image={item.image.desktop.x1}
                    title={item.title}
                    price={Math.round(item.price)}
                    // The variable contains information about whether the item is new
                    isNew={item.is_new} />;
            })
            }
        </div>
    );
};

export default CardBlockContainer;