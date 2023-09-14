import React from 'react';
import "./ContactInformation.scss";

function ContactInformation({ contacts }) {
    return (
        <section className='cvContacts'>
            <div className="cvContactsData">
                <h1 className='cvFullName'>{contacts.fullName}</h1>
                <span>Trainee/Junior Frontend developer</span>
                <h3>Personal information:</h3>

                <div className="cvInfo">
                    <p>
                        <i className='fa-solid fa-city'></i>
                        <b>City: </b>
                        {contacts.city}
                    </p>
                    <p>
                        <i className='fa-solid fa-phone'></i>
                        <b>Phone: </b>
                        <a href={`tel: ${contacts.phone}`}>{contacts.phone}</a>
                    </p>
                    <p>
                        <i className='fa-solid fa-envelope'></i>
                        <b>Email: </b>
                        <a href={`mailto: ${contacts.email}`}>{contacts.email}</a>
                    </p>
                    <p>
                        <i className='fa-brands fa-telegram'></i>
                        <b>Telegram: </b>
                        <a href={contacts.telegramURL}>{contacts.telegramName}</a>
                    </p>
                    <p>
                        <i className="fa-brands fa-linkedin"></i>
                        <b>LinkedIn: </b>
                        <a href={contacts.linkedIn}>{contacts.linkedIn}</a>
                    </p>

                    <p>
                        <i className='fa-brands fa-github'></i>
                        <b>Github: </b>
                        <a href={contacts.githubURL}>{contacts.githubURL}</a>
                    </p>
                </div>
            </div>

            <div className='cvContactsImage'>
                <img src={contacts.personalImage} alt={contacts.fullName} />
            </div>
        </section>
    );
}

export default ContactInformation;