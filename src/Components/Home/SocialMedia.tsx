import React, { useState } from 'react'
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faGithub, faLinkedin, faFacebook, faInstagram);

const SocialMedia = () => {

    return (
        <div>
            <span onClick={() => window.open("https://github.com/RagibHossain")}>
                <FontAwesomeIcon
                    size="2x"
                    icon={["fab", "github"]} /></span>
            <span onClick={() => window.open("https://www.linkedin.com/in/ragib-ibne-hossain-413b62199/")}>
                <FontAwesomeIcon
                    size="2x"
                    icon={["fab", "linkedin"]} /></span>
            <span onClick={() => window.open("https://www.facebook.com/ragib.hossain/")}>
                <FontAwesomeIcon
                    size="2x"
                    icon={["fab", "facebook"]} /></span>
            <span onClick={() => window.open("https://www.instagram.com/ragibibnehossain/")}>
                <FontAwesomeIcon
                    size="2x"
                    icon={["fab", "instagram"]} /></span>
        </div>
    )
}

export default SocialMedia
