import axios from "axios";


export default class ImageService {


    getAll() {
        return axios.get("http://localhost:8080/api/images/getAll");
    }

    
    getAllByEmployeeId(employeeId) {
        return axios.get("http://localhost:8080/api/images/getAllByEmployeeId?employeeId="+employeeId);
    }
}