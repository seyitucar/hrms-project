import axios from "axios";


export default class CityService {

    add(city) {
        return axios.post("http://localhost:8080/api/cities/add",city);
    }

    update(city) {
        return axios.post("http://localhost:8080/api/cities/update",city);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/cities/delete?id="+id);
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/cities/getById?id="+id);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/cities/getall"); 
    }
}