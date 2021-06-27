import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Card, Icon } from 'semantic-ui-react'
import EmployeeService from '../services/employeeService';

export default function EmployeeDetail() {

    let { id } = useParams();

    const [employee, setEmployee] = useState({});

    useEffect(() => {
      let employeeService = new EmployeeService();
      employeeService.getById(id).then((result) => setEmployee(result.data.data));
    });

    return (
        <div>
            <Card>
                <Card.Content>{employee.firstName} {employee.lastName}</Card.Content>
                <Card.Content description> {employee.email} </Card.Content>
                <Card.Content extra> {employee.birthYear} </Card.Content>
                 <Card.Content>
                    <Icon name='user'>{employee.nationalityId} </Icon>
                </Card.Content>
            </Card>
        </div>
    )
}
