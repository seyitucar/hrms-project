import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Card, Button, Icon } from 'semantic-ui-react'
import LanguageService from '../../services/languageService';
import HrmsModalDeleteButton from '../../utilities/customFormControls/HrmsModalDeleteButton';

function Language() {

    const history = useHistory();

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        let languageService = new LanguageService();
        languageService.getAll().then(result => setLanguages(result.data.data));
    }, [])

    const handleClick = (id) => {
        history.push("/languageUpdate/" + id)
    }

    const handleDeleteClick = (id) => {
        let languageService = new LanguageService();
        languageService.delete(id).then(result => toast.success(result.data.message))
            .catch(error => toast.error("işlem tamamlanamadı")); //database cascade kurallarına bak. Eğer işlem başarısızsa ekrandan silinmemesi gerekir

        let newList = languages.filter(language => {
            return language.id !== id
        });

        setLanguages(newList)
    }

    const handleForwardClick = () => {
        history.push("/languageAdd")
    }

    return (
        <Card fluid>
            <Card.Header><h1 style={{ margin: "0.2em" }}>languages
            <Button onClick={()=>handleForwardClick()} color="green" floated="right" icon labelPosition="right">
                    <Icon name="add" /> Add New Language</Button></h1>
            </Card.Header>
            {languages.map(language => (
                <Card.Content key={language.id}>
                    <Card.Header>{language.languageName}</Card.Header>
                    <Button onClick={() => handleClick(language.id)} style={{ opacity: "0.6" }} size="tiny" floated="right" color="linkedin" circular icon='edit' />
                    <HrmsModalDeleteButton onClick={() => handleDeleteClick(language.id)} />
                </Card.Content>

            ))}
        </Card>
    )
}

export default Language
