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

    getByEmployeeId(employeeId) {
        return axios.get("http://localhost:8080/api/favoriteJobs/getByEmployeeId?employeeId="+employeeId);
    }

    getFavoriteByEmployeeIdAndJobAdvertisementId(employeeId,jobAdvertisementId) {
        return axios.get("http://localhost:8080/api/favoriteJobs/getFavoriteByEmployeeIdAndJobAdvertisementId?employeeId="+employeeId+"&jobAdvertisementId="+jobAdvertisementId);
    }
    
}