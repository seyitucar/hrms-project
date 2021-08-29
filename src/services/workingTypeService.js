import axios from "axios";


export default class WorkingTypeService { 

    add(workingType) {
        return axios.post("http://localhost:8080/api/workingtypes/add",workingType);
    }

    update(workingType) {
        return axios.post("http://localhost:8080/api/workingtypes/update",workingType);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/workingtypes/delete?id="+id);
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/workingtypes/getById?id="+id);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/workingtypes/getAll");
    }


}