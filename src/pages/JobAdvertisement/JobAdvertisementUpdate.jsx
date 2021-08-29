import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Button, Grid, Icon } from 'semantic-ui-react'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'
import HrmsNumberInput from '../../utilities/customFormControls/HrmsNumberInput'
import HrmsDateInput from '../../utilities/customFormControls/HrmsDateInput'
import { toast } from 'react-toastify'
import HrmsSelectInput from '../../utilities/customFormControls/HrmsSelectInput'
import { useHistory, useParams } from 'react-router'
import CityService from '../../services/cityService'
import JobTitleService from '../../services/jobTitleService'
import WorkingTypeService from '../../services/workingTypeService'
import WorkingPlaceService from '../../services/workingPlaceService'
import JobAdvertisementService from '../../services/jobAdvertisementService'

function JobAdvertisementUpdate() {

    let {id} = useParams();

    const [jobAdvertisement, setJobAdvertisement] = useState({});

    console.log(jobAdvertisement)

    const history = useHistory();

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getById(id).then(result => setJobAdvertisement(result.data.data))
    }, [id])

    const initialValues = {
        id: jobAdvertisement.id,
        jobDescription: jobAdvertisement.jobDescription || "",
        minSalary: jobAdvertisement.minSalary ||  "",
        maxSalary: jobAdvertisement.maxSalary ||  "",
        numberOfOpenPosition: jobAdvertisement.numberOfOpenPosition ||  "",
        applicationDeadline: jobAdvertisement.applicationDeadline ||  "",
        isActive: false,
        createdAt: jobAdvertisement.createdAt ||  "",
        closingDate: jobAdvertisement.closingDate ||  "",
        cityId : jobAdvertisement.city?.id ||  "",
        employerId: "1",
        jobTitleId: jobAdvertisement.jobTitle?.id ||  "",
        workingPlaceId: jobAdvertisement.workingPlace?.id ||  "",
        workingTypeId: jobAdvertisement.workingType?.id ||  ""
    }

    const schema = Yup.object({
        jobDescription: Yup.string().required("İş tanımı zorunludur"),
        minSalary: Yup.number().required("Min ücret zorunludur"),
        maxSalary: Yup.number().required("Max ücret zorunludur"),
        numberOfOpenPosition: Yup.number().required("Açık pozisyon bilgisi zorunludur"),
        applicationDeadline: Yup.date().required("Son başvuru tarihi zorunludur"),
        isActive: Yup.boolean().required("Aktif mi bilgisi zorunludur"),
        closingDate: Yup.date().required("İlan kapanma tarihi zorunludur"),
        cityId: Yup.number().required("Şehir adı zorunludur"),
        employerId: Yup.number().required("Fabrika adı zorunludur"),
        jobTitleId: Yup.number().required("Pozisyon adı zorunludur"),
        workingPlaceId: Yup.number().required("Çalışma yeri zorunludur"),
        workingTypeId: Yup.number().required("Çalışma tipi zorunludur")
    })

    const [cities, setCities] = useState([])
    const [jobTitles, setJobTitle] = useState([])
    const [workingTypes, setWorkingType] = useState([])
    const [workingPlaces, setWorkingPlace] = useState([])

    useEffect(() => {

        let cityService = new CityService();
        cityService.getAll().then(result => setCities(result.data.data))

        let jobTitleService = new JobTitleService();
        jobTitleService.getAll().then(result => setJobTitle(result.data.data))

        let workingTypeService = new WorkingTypeService();
        workingTypeService.getAll().then(result => setWorkingType(result.data.data))

        let workingPlaceService = new WorkingPlaceService();
        workingPlaceService.getAll().then(result => setWorkingPlace(result.data.data))

    }, [])

    const cityOption = cities.map((city,index) => ({
        key: index,
        text: city.cityName,
        value: city.id
    }))

    const jobTitleOption = jobTitles.map((jobTitle,index) => ({
        key: index,
        text: jobTitle.titleName,
        value: jobTitle.id
    }))

    const workingTypeOption = workingTypes.map((workingType,index) => ({
        key: index,
        text: workingType.workingTypeName,
        value: workingType.id
    }))

    const workingPlaceOption = workingPlaces.map((workingPlace,index) => ({
        key: index,
        text: workingPlace.workingPlaceName,
        value: workingPlace.id
    }))

    const handleJobAdvertisementValue = (values) => {
        return {
            id: values.id,
            isActive: values.isActive,
            applicationDeadline: values.applicationDeadline,
            city: { id: values.cityId },
            closingDate: values.closingDate,
            employer: { id: values.employerId },
            jobDescription: values.jobDescription,
            jobTitle: { id: values.jobTitleId },
            maxSalary: values.maxSalary,
            minSalary: values.minSalary,
            numberOfOpenPosition: values.numberOfOpenPosition,
            workingPlace: { id: values.workingPlaceId },
            workingType: { id: values.workingTypeId },
            createdAt: Date.now()
        }
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                enableReinitialize
                onSubmit={(values) => {
                    console.log(values)
                    let jobAdvertisementService = new JobAdvertisementService();
                    jobAdvertisementService.update(handleJobAdvertisementValue(values)).then(result=>toast.success(result.data.message))
                    history.push("/jobAdvertisementUpdateList")
                }}
            >
                <Form className="ui form">
                    <Grid>
                        <Grid.Column width={16}>
                            <HrmsTextInput name="jobDescription" placeholder="Job Description" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <HrmsNumberInput name="minSalary" placeholder="Min Salary" />
                            <HrmsNumberInput name="maxSalary" placeholder="Max Salary" />
                            <HrmsNumberInput name="numberOfOpenPosition" placeholder="Number of Open Position" />
                            <HrmsSelectInput options={workingTypeOption} name="workingTypeId" placeholder="Working Type" />
                            <HrmsDateInput name="applicationDeadline" placeholder="applicationDeadline" /> 
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <HrmsSelectInput options={cityOption} name="cityId" placeholder="Şehir Seçiniz" />
                            <HrmsNumberInput name="employerId" placeholder="employerId" />
                            <HrmsSelectInput options={jobTitleOption} name="jobTitleId" placeholder="jobTitleId" />
                            <HrmsSelectInput options={workingPlaceOption} name="workingPlaceId" placeholder="workingPlaceId" />
                            <HrmsDateInput name="closingDate" placeholder="closingDate" />
                        </Grid.Column>
                        <Grid.Column width={16}>
                        <Button type="submit" icon labelPosition="right" color="green" >Ekle<Icon name="add"></Icon></Button>
                        </Grid.Column>
                    </Grid>      
                </Form>
            </Formik>
        </div>
    )
}

export default JobAdvertisementUpdate
