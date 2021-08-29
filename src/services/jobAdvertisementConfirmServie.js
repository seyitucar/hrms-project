import axios from "axios"

export default class jobAdvertisementConfirmServie {

    setActiveJobAdvertisement(jobAdvertisementConfirm) {
        return axios.post("http://localhost:8080/api/jobAdvertisementConfirms/setActiveJobAdvertisement",jobAdvertisementConfirm);
    } 

    setPassiveJobAdvertisement(jobAdvertisementConfirm) {
        return axios.post("http://localhost:8080/api/jobAdvertisementConfirms/setPassiveJobAdvertisement",jobAdvertisementConfirm);
    } 

}
