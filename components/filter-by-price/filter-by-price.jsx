const FilterByPrice = ({ minPrice, maxPrice }) => {
    return (
        <div className="filter-by-price">
            <input type="text" placeholder={Math.round(minPrice)} />
            <input type="text" placeholder={Math.round(maxPrice)} />
        </div>
    );
};

export default FilterByPrice;