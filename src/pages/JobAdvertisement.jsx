import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisement() {

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(()=>{
      let jobAdvertisementService = new JobAdvertisementService()
      jobAdvertisementService.getJobAdvertisement().then(result=>setJobAdvertisements(result.data.data))
  },[])

  return (
    <div>
      <Card.Group>
        {jobAdvertisements.map((jobAdvertisement) => (
          <Card key={jobAdvertisement.id}>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="/images/avatar/large/steve.jpg"
              />
              <Card.Header> {jobAdvertisement.jobTitle.titleName}</Card.Header>
              <Card.Meta>Firma : {jobAdvertisement.employer.companyName}</Card.Meta>
              <Card.Description>
               İş Tanımı : {jobAdvertisement.jobDescription}
              </Card.Description>
              <Card.Description>
                Maaş Aralığı : <strong>{jobAdvertisement.minSalary} TL - {jobAdvertisement.maxSalary} TL</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Başvur
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
