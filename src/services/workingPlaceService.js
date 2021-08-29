import axios from "axios";


export default class WorkingPlaceService {

    add(workingPlace) {
        return axios.post("http://localhost:8080/api/workingplaces/add",workingPlace);
    }

    update(workingPlace) {
        return axios.post("http://localhost:8080/api/workingplaces/update",workingPlace);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/workingplaces/delete?id="+id);
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/workingplaces/getById?id="+id);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/workingplaces/getAll");
    }

}