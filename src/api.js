const BASE_URL = "http://localhost:3001";

/**
 * Static class that houses  methods for data retreival from the Pixly backend
 * server.
 *
 * Methods: create(), get()
 */
class Api {

    /** sends newly created image to Pixly backend and returns image for editing */
    static async create(formData) {
        const response = await fetch(`${BASE_URL}/upload`, { method: "POST", body: formData });
        const data = await response.json();
        return data;
    }

    /** Retreives all images matching search criteria from backend */
    static async get(searchData = "") {
        const params = new URLSearchParams(searchData);
        const response = await fetch(`${BASE_URL}/?${params}`);
        const data = await response.json();
        return data;
    }
}

export default Api;