import { useState } from "react";

// Component containing a filter by product price
const FilterByPrice = ({ minPrice, maxPrice, setMinPrice, setMaxPrice, setLockedMinPrice, setLockedMaxPrice }) => {
    // This function is responsible for checking the 
    // correct entry of the minimum price
    function entryOfMinPrice(e) {
        if (typeof +e.target.value === 'number' && !isNaN(e.target.value) && e.target.value != '') {
            setMinPrice(e.target.value);
            setCorrectMinPrice(true);
            setLockedMinPrice(false);
        } else if (e.target.value == '') {
            setMinPrice(false);
            setCorrectMinPrice(true);
            setLockedMinPrice(false);
        } else {
            setMinPrice(false);
            setCorrectMinPrice(false);
            setLockedMinPrice(true);
        }
    }

    // This function is responsible for checking the 
    // correct entry of the maximum price
    function entryOfMaxPrice(e) {
        if (typeof +e.target.value === 'number' && !isNaN(e.target.value) && e.target.value != '') {
            setMaxPrice(e.target.value);
            setCorrectMaxPrice(true);
            setLockedMaxPrice(false);
        } else if (e.target.value == '') {
            setMaxPrice(false);
            setCorrectMaxPrice(true);
            setLockedMaxPrice(false);
        } else {
            setMaxPrice(false);
            setCorrectMaxPrice(false);
            setLockedMaxPrice(true);
        }
    }

    // These hooks are responsible for checking if values are 
    // entered correctly in text fields.
    const [correctMinPrice, setCorrectMinPrice] = useState(true);
    const [correctMaxPrice, setCorrectMaxPrice] = useState(true);

    let correct;
    if (!correctMinPrice || !correctMaxPrice) {
        correct = false;
    } else {
        correct = true;
    }

    return (
        <>
            <div className={correct ? 'filter-by-price' : 'filter-by-price error'}>
                <input
                    className={correctMinPrice ? 'min-price-field' : 'min-price-field error'}
                    type="text"
                    placeholder={Math.round(minPrice)}
                    onKeyDown={(e) => { e.key == ' ' ? e.preventDefault() : '' }}
                    onInput={(e) => entryOfMinPrice(e)} />
                <input
                    className={correctMaxPrice ? 'max-price-field' : 'max-price-field error'}
                    type="text"
                    placeholder={Math.round(maxPrice)}
                    onKeyDown={(e) => { e.key == ' ' ? e.preventDefault() : '' }}
                    onInput={(e) => entryOfMaxPrice(e)} />
            </div>
            <p className={correct ? 'error-text' : 'error-text visible'}>Пожалуйста, введите корректное значение (только цифры)</p>
        </>
    );
};

export default FilterByPrice;