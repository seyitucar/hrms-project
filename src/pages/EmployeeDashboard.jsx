import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

function EmployeeDashboard() {
    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/school`}>Educations</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/jobExperience`}>Job Experience</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/coverLetters`}>Cover Letter</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/employeeLanguage`}>Language</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/employeeSocialMedia`}>Social Media</Link></Card.Header>
                </Card.Content>
            </Card>

        </Card.Group>
    )
}

export default EmployeeDashboard
