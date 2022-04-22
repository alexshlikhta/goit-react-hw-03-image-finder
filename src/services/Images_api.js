export default function ImagesAPI(query, page) {
    const API_KEY = '24173514-089b97c8c3d8ec143a8a2c0bb';

    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&per_page=12&page=${page}`).then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Some errors with ${query}`));
    });
}
