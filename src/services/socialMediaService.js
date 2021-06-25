import axios from "axios";


export default class SocialMediaService {

    add(socialMedia) {
        return axios.push("http://localhost:8080/api/socialmedias/add");
    }

    getAll() {
        return axios.get("http://localhost:8080/api/socialmedias/getAll");
    }
}