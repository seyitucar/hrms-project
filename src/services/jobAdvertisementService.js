import axios from "axios";

export default class JobAdvertisementService {

    add(jobAdvertisement) {
        return axios.push("http://localhost:8080/api/jobAdvertisements/add",jobAdvertisement);
    }

    getJobAdvertisement() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall");
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