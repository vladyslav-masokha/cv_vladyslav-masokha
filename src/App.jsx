import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import ContactInformation from "./components/ContactInformation/ContactInformation";
import SkillsInformation from "./components/SkillsInformation/SkillsInformation";
import EducationInformation from "./components/EducationInformation/EducationInformation";

function App() {
    const dataURL = './data.json';
    const [contacts, setContacts] = useState({});
    const [skills, setSkills] = useState({});
    const [education, setEducation] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(dataURL);
                const el = await res.json();
                setContacts(el[0]);
                setSkills(el[1]);
                setEducation(el[2]);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='cv'>
            <div className="wrapper">
                <div className="cvBody">
                    <ContactInformation contacts={contacts} />
                    <SkillsInformation skills={skills} />
                    <EducationInformation education={education} />
                </div>
            </div>
        </div>
    );
}

export default App;