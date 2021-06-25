import axios from "axios";


export default class UserService {

    add(user) {
        return axios.push("http://localhost:8080/api/users/add",user);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/users/getAll");
    }

    findByEmail(email) {
        return axios.get("http://localhost:8080/findByEmail?email="+email);
    }
}