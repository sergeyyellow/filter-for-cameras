import OneProductCard from "../one-product-card/one-product-card";

const CardBlockContainer = ({ products }) => {
    return (
        <div className="card-block-container">
            {products && products.map((item, i) => {
                return <OneProductCard key={i} image={item.image.desktop.x1} title={item.title} price={Math.round(item.price)} isNew={item.is_new} />;
            })
            }
        </div>
    );
};

export default CardBlockContainer;