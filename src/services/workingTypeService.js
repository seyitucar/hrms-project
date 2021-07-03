import axios from "axios";


export default class WorkingTypeService { 

    add(workingType) {
        return axios.push("http://localhost:8080/api/workingtypes/add",workingType);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/workingtypes/getAll");
    }

}