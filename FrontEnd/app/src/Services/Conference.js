import http from '../API';

class ConferenceService {

    get(id) {
        return http.get(`/conference/${id}`);
    }

    getAll() {
        return http.get("/conference/");
    }

    create(data) {
        return http.post("/conference/create", data);
    }

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

export default new ConferenceService();