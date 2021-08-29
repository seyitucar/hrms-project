import axios from "axios"; 

export default class FavoriteJobService {

    add(jobAdvertisement) {
        return axios.post("http://localhost:8080/api/favoriteJobs/add",jobAdvertisement);
    }

    remove(favoriteJobId) {
        return axios.post("http://localhost:8080/api/favoriteJobs/remove?favoriteJobId="+favoriteJobId);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/favoriteJobs/getall");
    }

    getById(favoriteJobId) {
        return axios.get("http://localhost:8080/api/favoriteJobs/getById?favoriteJobId="+favoriteJobId);
    }

    getAllByEmployeeId(employeeId) {
        return axios.get("http://localhost:8080/api/favoriteJobs/getAlByEmployeeId?employeeId="+employeeId);
    }

    getByEmployeeIdAndJobAdvertisementId(employeeId,jobAdvertisementId) {
        return axios.get("http://localhost:8080/api/favoriteJobs/getByEmployeeIdAndJobAdvertisementId?employeeId="+employeeId+"&jobAdvertisementId="+jobAdvertisementId);
    }
    
}