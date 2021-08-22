import axios from "axios";


export default class SocialMediaService {

    add(socialMedia) {
        return axios.post("http://localhost:8080/api/socialmedias/add",socialMedia);
    }

    update(socialMedia) {
        return axios.post("http://localhost:8080/api/socialmedias/update",socialMedia);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/socialmedias/delete?id="+id);
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/socialmedias/getById?id="+id);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/socialmedias/getAll");
    }
}