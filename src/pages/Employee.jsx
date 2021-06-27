import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Icon, Table } from 'semantic-ui-react';
import EmployeeService from '../services/employeeService';

export default function Employee() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      let employeeService = new EmployeeService();
      employeeService.getEmployees().then((result) => setEmployees(result.data.data));
    },[]);
  
    return (
      <div>
        <Table singleLine striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Nationality Id</Table.HeaderCell>
              <Table.HeaderCell>Birth Year</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {employees.map((employee) => (
              <Table.Row key={employee.id}>
                <Table.Cell><Link to={`/employee/${employee.id}`}>{employee.firstName}</Link></Table.Cell>
                <Table.Cell>{employee.lastName}</Table.Cell>
                <Table.Cell>{employee.email}</Table.Cell>
                <Table.Cell>{employee.nationalityId}</Table.Cell>
                <Table.Cell>{employee.birthYear}</Table.Cell>
                <Table.HeaderCell>
                  <Button basic color='red' size="tiny"><Icon name='delete'/>Sil</Button>
                  <Button basic color='green' size="tiny"><Icon name='edit'/>Güncelle</Button>
                </Table.HeaderCell>
  
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
}
