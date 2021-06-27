import http from '../API';

class ImportantDatesService {

    get(id) {
        return http.get(`/importantDate/${id}`);
    }

    getAll() {
        return http.get("/importantDate/");
    }

    // create(data) {
    //     return http.post("/Requests", data);
    // }

    // update(id, data) {
    //     return http.put(`/Requests/${id}`, data);
    // }

    // delete(id) {
    //     return http.delete(`/Requests/${id}`);
    // }

    // deleteAll() {
    //     return http.delete(`/Requests`);
    // }

    // findByTitle(title) {
    //     return http.get(`/Requests?title=${title}`);
    // }
}

export default new ImportantDatesService();