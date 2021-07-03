import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Button, Icon } from 'semantic-ui-react'
import HrmsTextInput from '../utilities/customFormControls/HrmsTextInput'
import HrmsNumberInput from '../utilities/customFormControls/HrmsNumberInput'
import HrmsDateInput from '../utilities/customFormControls/HrmsDateInput'
import { toast } from 'react-toastify'
import CityService from '../services/cityService'
import HrmsSelectInput from '../utilities/customFormControls/HrmsSelectInput'
import { useHistory } from 'react-router'
import JobTitleService from '../services/jobTitleService'
import WorkingTypeService from '../services/workingTypeService'
import WorkingPlaceService from '../services/workingPlaceService'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function JobAdvertisementAdd() {

    const history = useHistory();

    const initialValues = {
        jobDescription: "",
        minSalary: "",
        maxSalary: "",
        numberOfOpenPosition: "",
        applicationDeadline: "",
        isActive: false,
        createdAt: "",
        closingDate: "",
        cityId: "",
        employerId: "8",
        jobTitleId: "",
        workingPlaceId: "",
        workingTypeId: ""
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

        let cityService = new CityService()
        cityService.getAll().then(result => setCities(result.data.data))

        let jobTitleService = new JobTitleService()
        jobTitleService.getAll().then(result=>setJobTitle(result.data.data))

        let workingTypeService = new WorkingTypeService ()
        workingTypeService.getAll().then(result=>setWorkingType(result.data.data))

        let workingPlaceService = new WorkingPlaceService()
        workingPlaceService.getAll().then(result=>setWorkingPlace(result.data.data))

    }, [])

    const cityOption = cities.map((city) => ({
        key: city.id,
        text: city.cityName,
        value: city.id
    }))

    const jobTitleOption = jobTitles.map((jobTitle) => ({
        key: jobTitle.id,
        text: jobTitle.titleName,
        value: jobTitle.id
    }))

    const workingTypeOption = workingTypes.map((workingType) => ({
        key: workingType.id,
        text: workingType.workingTypeName,
        value: workingType.id
    }))

    const workingPlaceOption = workingPlaces.map((workingPlace) => ({
        key: workingPlace.id,
        text: workingPlace.workingPlaceName,
        value: workingPlace.id
    }))

    function handleJobAdvertisementValue(values) {
        return {
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
                onSubmit={(values) => {
                        console.log(values)
                        let jobAdvertisementService = new JobAdvertisementService();
                        jobAdvertisementService.add(handleJobAdvertisementValue(values)).then(toast.success("İş ilanı eklendi"))
                        history.push("/jobAdvertisements")
                }}
            >
                <Form className="ui form">
                    <HrmsTextInput name="jobDescription" placeholder="jobDescription" />
                    <HrmsNumberInput name="minSalary" placeholder="minSalary" />
                    <HrmsNumberInput name="maxSalary" placeholder="maxSalary" />
                    <HrmsNumberInput name="numberOfOpenPosition" placeholder="numberOfOpenPosition" />
                    <HrmsDateInput name="applicationDeadline" placeholder="applicationDeadline" />
                    <HrmsDateInput name="closingDate" placeholder="closingDate" />
                    <HrmsSelectInput options={cityOption} name="cityId" placeholder="Şehir Seçiniz"/>
                    <HrmsNumberInput name="employerId" placeholder="employerId" />
                    <HrmsSelectInput options={jobTitleOption} name="jobTitleId" placeholder="jobTitleId" />
                    <HrmsSelectInput options={workingPlaceOption} name="workingPlaceId" placeholder="workingPlaceId" />
                    <HrmsSelectInput options={workingTypeOption} name="workingTypeId" placeholder="workingTypeId" />
                    <Button type="submit" icon labelPosition="right" color="green" >Ekle<Icon name="add"></Icon></Button>
                </Form>
            </Formik>
        </div>
    )
}

