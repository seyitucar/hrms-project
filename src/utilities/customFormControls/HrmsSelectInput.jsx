import { useField } from 'formik'
import React from 'react'
import { Label, FormField } from 'semantic-ui-react'

export default function HrmsSelectInput({ ...props }) {


    const [field, meta] = useField(props);

    return (
        <div>
            {/* <FormField error={meta.touched && !!meta.error}>
                <Select 
                style={{ margin: "0.5em" }} 
                search
                selection
                onChange={props.onChange}
                {...props}
                >
                </Select>
                {meta.touched && !!meta.error ? (<Label pointing basic color="red" content={meta.error}></Label>) : null}
            </FormField>  */}

            <FormField style={{ margin: "0.5em" }} error={meta.touched && !!meta.error}>
                <select {...field} {...props} style={{ marginBottom: 15 }}>
                    <option defaultValue value="">{props.placeholder}</option>
                    {props.options.map((option) => (
                        <option key={option.key} value={option.value}>{option.text}</option>
                    ))}
                </select>
                {meta.touched && !!meta.error ? (<Label pointing basic color="red" content={meta.error}></Label>) : null}
            </FormField>
        </div>
    )
}
