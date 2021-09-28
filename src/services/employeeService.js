import axios from "axios"


export default class EmployeeService {

    add(employee){
        return axios.post("http://localhost:8080/api/employees/add",employee);
    }

    update(employee){
        return axios.post("http://localhost:8080/api/employees/update",employee);
    }

    delete(employeeId){
        return axios.post("http://localhost:8080/api/employees/delete?id="+employeeId);
    }

    getAll(){
        return axios.get("http://localhost:8080/api/employees/getall");
    }

    getById(id){
        return axios.get("http://localhost:8080/api/employees/getById?id="+id);
    }

}

