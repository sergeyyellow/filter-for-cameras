import OneFilterByCamera from "../one-filter-by-camera/one-filter-by-camera";

// Component containing a list of filters by brand
const FilterByCameras = ({ filterByBrands }) => {
    return (
        <ul className="filter-by-cameras">
            {filterByBrands && filterByBrands.items.map((item, i) => {
                return <OneFilterByCamera key={i} title={item.title} />;
            })
            }
        </ul>
    );
};

export default FilterByCameras;