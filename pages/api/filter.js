export const filter = (minPrice = false, maxPrice = false) => {
    try {
        // Server request implementation
        let arr = [];
        let request = '';

        // If there is a specified variable, then there will be such a request
        if (minPrice) {
            arr.push(`price[min]=${minPrice}`);
        }

        if (maxPrice) {
            arr.push(`price[max]=${maxPrice}`);
        }

        // A snippet of code responsible for the correct composition 
        // of the request
        if (arr) {
            if (arr.length == 1) {
                request += '?' + arr[0];
            } else {
                for (let i = 0; i < arr.length; i++) {
                    if (i == 0) {
                        request += '?' + arr[i];
                    } else if (i == arr.length - 1) {
                        request += '&' + arr[i];
                    } else {
                        request += '&' + arr[i];
                    }
                }
            }
        }

        const response = fetch(`https://getlens-master.stage.dev.family/api/pages/obektivy${request}`)
            .then(res => res.json())
            .then(data => data);

        return response;
    } catch (err) {
        throw new Error('Server access error');
    }
}