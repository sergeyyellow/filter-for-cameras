import { useState } from "react";

// Component containing a filter by product price
const FilterByPrice = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
    // Checking the entry of the minimum price
    function entryOfMinPrice(e) {
        if (typeof +e.target.value === 'number' && !isNaN(e.target.value) && e.target.value != '') {
            setMinPrice(e.target.value);
            setCorrectMinPrice(true);
        } else if (e.target.value == '') {
            setMinPrice(false);
            setCorrectMinPrice(true);
        } else {
            setMinPrice(false);
            setCorrectMinPrice(false);
        }
    }

    // Checking the entry of the maximum price
    function entryOfMaxPrice(e) {
        if (typeof +e.target.value === 'number' && !isNaN(e.target.value) && e.target.value != '') {
            setMaxPrice(e.target.value);
            setCorrectMaxPrice(true);
        } else if (e.target.value == '') {
            setMaxPrice(false);
            setCorrectMaxPrice(true);
        } else {
            setMaxPrice(false);
            setCorrectMaxPrice(false);
        }
    }

    // States responsible for the correctness of input in the input field
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
            <p className={correct ? 'error-text' : 'error-text show'}>Пожалуйста, введите корректное значение (только цифры)</p>
        </>
    );
};

export default FilterByPrice;