import {useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function HrmsBooleanInput({...props}) {

    const [field,meta] = useField(props)

    return (
        <FormField style={{ margin: "0.5em" }} error={meta.touched && !!meta.error}>
            <input type="checkbox" {...field} {...props}/>
            {meta.touched && !!meta.error ? (
              <Label pointing basic color="red" content={meta.error}></Label>  
            ):null}
        </FormField> 
    )
}
