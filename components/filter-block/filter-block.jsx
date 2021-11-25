import FilterByPrice from "../filter-by-price/filter-by-price";
import FilterByCameras from "../filter-by-cameras/filter-by-cameras";

const FilterBlock = ({ data }) => {
    return (
        <div className="filter-block">
            <p className="total-goods-text">Товаров: {data.products.length}</p>
            <p className="cameras-text">{data.categories[1].title}</p>

            <div className="price-block">
                <p className="text">Цена, ₽</p>
                <FilterByPrice minPrice={data.filters[0].min} maxPrice={data.filters[0].max} />
            </div>

            <div className="brand-block">
                <p className="text">Бренд</p>
                <FilterByCameras filterByBrands={data.filters[3]} />
            </div>
        </div>
    );
};

export default FilterBlock;