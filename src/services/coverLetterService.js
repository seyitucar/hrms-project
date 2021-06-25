import axios from "axios";


export default class CoverLetterService {

    add(coverLetter) {
        return axios.push("http://localhost:8080/api/coverletters/add",coverLetter);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/coverletters/getAll");
    }
}