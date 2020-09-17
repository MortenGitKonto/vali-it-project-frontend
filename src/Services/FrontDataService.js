import http from "../http-common";

class FrontDataService {
    create(data) {
        return http.post("/client", data);
    }
    // createDevice(deviceData){
    //     return http.post("/device", deviceData);
    // }
    getAll() {
        return http.get("/client")
    }
}

export default new FrontDataService();