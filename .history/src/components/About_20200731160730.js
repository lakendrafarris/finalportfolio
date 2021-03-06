import React, { Component } from 'react';
import { Container, Row, Col, Media} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons'

export default class About extends Component {
    render() {
        return (
            <section id="about">
            <Media>
                <img 
                width={'450px'}
                height={'400px'}
                src="imgs/portfoliopic.jpeg" alt="portfoliopic" />
                    <Media.Body>
                    <h5>I am </h5>               
                        <p>
                                I am an enthusiastic software engineer attending Digital Crafts Houston to be completed in July 2020
                                and is eager to join the technology industry. As I am an Army veteran, I enjoy being challenged and engaged with projects that require me to work 
                                outside my comfort and knowledge set while working alone or in a collaborative environment. 
                                My passion for creating practical proficient software is what drives me to keep striving to deliver stellar work 
                                ethic and drive. I am a skilled professional with proven leadership and supervisory skills, outstanding communication and interpersonal skills, 
                                and a friendly, pleasant demeanor with excellent social skills to encourage a healthy atmosphere. 
                            </p>

                                <SocialIcon
                                url='https://www.linkedin.com/in/lakendra-f-054050188/'
                                target='_blank'
                                />
                                <SocialIcon url='https://github.com/lakendrafarris' target='_blank' />
                    </Media.Body>
                    </Media>
        </section>
        )
    }
}