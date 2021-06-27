import { Form, Formik } from 'formik'
import { Button, FormField, FormGroup, Icon, Label } from 'semantic-ui-react';
import * as Yup from "yup";
import HrmsBooleanInput from '../utilities/customFormControls/HrmsBooleanInput';
import HrmsDateInput from '../utilities/customFormControls/HrmsDateInput';
import HrmsNumberInput from '../utilities/customFormControls/HrmsNumberInput';
import HrmsTextInput from '../utilities/customFormControls/HrmsTextInput';

export default function jobAdvertisementAdd() {

    const initialValues = {
        jobDescription: "", minSalary: "", maxSalary: "", numberOfOpenPosition: "", applicationDeadline: "",
        isActive: "", closingDate: "", cityName: "", companyName: "", titleName: "", workingPlaceName: "", workingTypeName: ""
    }

    const schema = Yup.object({
        jobDescription: Yup.string().required("İş tanımı zorunludur"),
        minSalary: Yup.number().required("Min ücret zorunludur"),
        maxSalary: Yup.number().required("Max ücret zorunludur"),
        numberOfOpenPosition: Yup.number().required("Açık pozisyon bilgisi zorunludur"),
        applicationDeadline: Yup.date().required("Son başvuru tarihi zorunludur"),
        isActive: Yup.boolean().required("Aktif mi bilgisi zorunludur"),
        closingDate: Yup.date().required("İlan kapanma tarihi zorunludur"),
        cityName: Yup.string().required("Şehir adı zorunludur"),
        companyName: Yup.string().required("Fabrika adı zorunludur"),
        titleName: Yup.string().required("Pozisyon adı zorunludur"),
        workingPlaceName: Yup.string().required("Çalışma yeri zorunludur"),
        workingTypeName: Yup.string().required("Çalışma tipi zorunludur")
    })

    return (
        <div>   
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className="ui form">
                        <FormField>
                            <HrmsTextInput name="jobDescription" placeholder="jobDescription" />
                            <HrmsNumberInput name="minSalary" placeholder="minSalary" />
                            <HrmsNumberInput name="maxSalary" placeholder="maxSalary" />
                            <HrmsNumberInput name="numberOfOpenPosition" placeholder="numberOfOpenPosition" />
                            <HrmsDateInput name="applicationDeadline" placeholder="applicationDeadline" />
                            <HrmsDateInput name="closingDate" placeholder="closingDate" />
                            <HrmsTextInput name="cityName" placeholder="cityName" />
                            <HrmsTextInput name="companyName" placeholder="companyName" />
                            <HrmsTextInput name="titleName" placeholder="titleName" />
                            <HrmsTextInput name="workingPlaceName" placeholder="workingPlaceName" />
                            <HrmsTextInput name="workingTypeName" placeholder="workingTypeName" />
                            <Label>Aktif mi? <HrmsBooleanInput name="isActive" /></Label>
                        </FormField>
                    <Button type="submit" icon labelPosition="right" color="green" >Ekle<Icon name="add"></Icon></Button>
                </Form>
            </Formik>
        </div>
    )
}
