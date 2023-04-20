import createApiClient from "./api.service";

class BillService {
    constructor(baseURL = "/api/bill") {
        this.api = createApiClient(baseURL);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
}

export default new BillService();