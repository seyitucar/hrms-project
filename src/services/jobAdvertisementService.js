import axios from "axios";

export default class JobAdvertisementService {

    add(jobAdvertisement) {
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",jobAdvertisement);
    }

    update(jobAdvertisement) {
        return axios.post("http://localhost:8080/api/jobAdvertisements/update",jobAdvertisement);
    }

    delete(id) {
        return axios.post("http://localhost:8080/api/jobAdvertisements/delete?id="+id);
    }

    setActiveJobAdvertisement(jobAdvertisementId) {
        return axios.post("http://localhost:8080/api/jobAdvertisements/setActiveJobAdvertisement?jobAdvertisementId="+jobAdvertisementId);
    } 

    setPassiveJobAdvertisement(jobAdvertisementId) {
        return axios.post("http://localhost:8080/api/jobAdvertisements/setPassiveJobAdvertisement?jobAdvertisementId="+jobAdvertisementId);
    } 

    getAll() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall");
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getById?id="+id);
    }

    getByIsActiveTrue() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByIsActiveTrue");
    }

    getByIsActiveFalse() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByIsActiveFalse");
    }

    getByActivity() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByActivity?activityStatus=true");
    }


    getByActivityAndCompanyName(companyName) {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByActivityAndCompanyName?activityStatus=true&companyName="+companyName);
    }

    getByActivityOrderByApplicationDeadline() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByActivityOrderByApplicationDeadline?activityStatus=true")
    }

    getByActivityOrderByApplicationDeadlineDesc() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByActivityOrderByApplicationDeadlineDesc?activityStatus=true")
    }

    getByEmployerId(employerId) {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByEmployerId?employerId="+employerId)
    }

    setStatus(employerId, jobAdvertisementId, status) {
        return axios.get("http://localhost:8080/api/jobAdvertisements/setStatus?employerId="+employerId+"&jobAdvertisementId="+jobAdvertisementId+"&status="+status)
    }

}