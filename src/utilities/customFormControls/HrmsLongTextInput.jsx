import React from 'react'
import {useField } from 'formik'
import { FormField, Label } from 'semantic-ui-react'

function HrmsLongTextInput({...props}) {

    const [field,meta] = useField(props)

    return (
        <FormField style={{ margin: "0.5em" }} error={meta.touched && !!meta.error}>
            <input type="text" {...field} {...props}/>
            {meta.touched && !!meta.error ? (
              <Label pointing basic color="red" content={meta.error}></Label>  
            ):null}
        </FormField>
    )
}

export default HrmsLongTextInput
