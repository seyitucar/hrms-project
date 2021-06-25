import axios from "axios";


export default class CityService {

    add(city) {
        return axios.push("http://localhost:8080/api/cities/add",city);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/cities/getall");
    }
}