import axios from "axios";


export default class WorkingPlaceService {

    add(workingPlace) {
        return axios.push("http://localhost:8080/api/workingplaces/add",workingPlace);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/workingplaces/getAll");
    }

}