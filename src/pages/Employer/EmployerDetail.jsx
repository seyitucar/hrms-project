import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { toast } from 'react-toastify';
import { Button, Card, Grid, Label } from 'semantic-ui-react'
import EmployerService from '../../services/employerService';
import EmployerUpdateConfirmService from '../../services/employerUpdateConfirmService';
import EmployerUpdateService from '../../services/employerUpdateService';

export default function EmployerDetail() {

    let { id } = useParams();

    let history = useHistory();

    const [employer, setEmployer] = useState({});
    const [employerUpdate, setEmployerUpdate] = useState({});

    console.log("eu",employerUpdate)

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getById(id).then((result) => setEmployer(result.data.data));
    }, [id]);

    useEffect(() => {
        let employerUpdateService = new EmployerUpdateService();
        employerUpdateService.getByEmployerIdAndIsVerifiedFalse(id).then((result) => setEmployerUpdate(result.data.data));
    }, [id]);

    const handleEmployerUpdateConfirm = (employer, employerUpdate) => {
        async function onayla() {
            let systemUser = {id:12} // loginden gelecek
            let employerUpdateConfirmService = new EmployerUpdateConfirmService();
            let employerUdateValue = {employer,employerUpdate, systemUser}
            console.log(employerUdateValue)
            let response = await employerUpdateConfirmService.verifyEmployerUpdate(employerUdateValue)

            console.log(response)
            if (response?.data.success) {
                toast.success("Onaylandı");
                history.push("/employer")

            }
        }

        onayla();
    }

    const handleEmployerUpdateReject = (employer, employerUpdate) => {
        async function reddet() {
            let systemUser = {id:12} // loginden gelecek
            let employerUpdateConfirmService = new EmployerUpdateConfirmService();
            let employerUdateValue = {employer, employerUpdate, systemUser}
            console.log(employerUdateValue)
            let response = await employerUpdateConfirmService.rejectEmployerUpdate(employerUdateValue);
            
            if (response.data.success) {
                toast.error("İşveren bilgileri reddedildi");
                history.push("/employer")
            }
        }
        reddet();
    }

    return (
        <div>
            {employerUpdate &&
                <Card.Content extra>
                    <Button onClick={() => { handleEmployerUpdateConfirm(employer, employerUpdate) }} color="green" content="Değişiklikleri Onayla" />
                    <Button onClick={() => { handleEmployerUpdateReject(employer, employerUpdate) }} color="red" content="Değişiklikleri Reddet" />
                </Card.Content>
            }

            <Grid columns={2} padded>
                <Grid.Column>
                    <Card fluid>
                        <Card.Content extra>
                            <Card.Header> Mevcut Veri</Card.Header>
                        </Card.Content>
                        <strong><label style={{ margin: "1em" }}>Company Name</label></strong>
                        <Card.Content>{employer.companyName}</Card.Content>
                        <strong><label style={{ margin: "1em" }}>Website</label></strong>
                        <Card.Content> {employer.website} </Card.Content>
                        <strong><label style={{ margin: "1em" }}>Phone Number</label></strong>
                        <Card.Content> {employer.phoneNumber} </Card.Content>
                        <strong><label style={{ margin: "1em" }}>Email</label></strong>
                        <Card.Content> {employer.email} </Card.Content>
                        <strong><label style={{ margin: "1em" }}>Password</label></strong>
                        <Card.Content> {employer.password} </Card.Content>
                    </Card>
                </Grid.Column>

                {employerUpdate &&
                    <Grid.Column>
                        <Card fluid>
                            <Card.Content extra>
                                <Label ribbon color="red">{employerUpdate.verified === false ? "Onay Bekliyor" : "Onaylandı"}</Label>
                                <Card.Header> Güncellenmiş Veri</Card.Header>
                            </Card.Content>
                            <strong><label style={{ margin: "1em" }}>Company Name</label></strong>
                            <Card.Content>{employerUpdate.companyName}</Card.Content>
                            <strong><label style={{ margin: "1em" }}>Website</label></strong>
                            <Card.Content> {employerUpdate.website} </Card.Content>
                            <strong><label style={{ margin: "1em" }}>Phone Number</label></strong>
                            <Card.Content> {employerUpdate.phoneNumber} </Card.Content>
                            <strong><label style={{ margin: "1em" }}>Email</label></strong>
                            <Card.Content> {employerUpdate.email} </Card.Content>
                            <strong><label style={{ margin: "1em" }}>Password</label></strong>
                            <Card.Content> {employerUpdate.password} </Card.Content>
                        </Card>
                    </Grid.Column>
                }
            </Grid>

        </div>
    )
}
