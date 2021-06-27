import http from "../http-common";

class WorkshopDataService {
    getAll() {
      return http.get("/workshop/");
    }
  
    get(id) {
      return http.get(`/workshop/byId/${id}`);
    }
  
    create(data) {
      return http.post("/workshop", data);
    }
  
    update(id, data) {
      return http.put(`/workshop/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/workshop/${id}`);
    }
  
    findByUserId(id) {
      return http.get(`/tutorials?title=${id}`);
    }
  }
  
  export default new WorkshopDataService();