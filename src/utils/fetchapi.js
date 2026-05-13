const API_URL = " https://fakestoreapi.com/products";

function apiFetch() {
    return fetch(API_URL)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json)
            return json
        })
};

export {
    apiFetch
}