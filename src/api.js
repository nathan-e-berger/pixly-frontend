const BASE_URL = "http://localhost:3001";

class Api {

    static async create(formData) {
        const response = await fetch(`${BASE_URL}/upload`, { method: "POST", body: formData });
        const data = await response.json();
        console.log("data@API", data);
        return data;
    }

    static async get(searchData = "") {
        const params = new URLSearchParams(searchData);
        const response = await fetch(`${BASE_URL}/?${params}`, { headers: { accept: "application/ json" } });
        const data = await response.json();
        return data;
    }

    static async getImage(id) {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        return data;
    }
}

export default Api;