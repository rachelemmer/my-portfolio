import React from 'react'
import Card from "react-bootstrap/Card"

export default function ProjectCards() {
    return (
        <div className="project-card-container">
            <Card className="project-card" style={{ width: '18rem' }}>
                <Card.Img className="project-photo" variant="top" src="https://i.imgur.com/uYxDgYK.png" />
                <Card.Body>
                    <Card.Title>Hike</Card.Title>
                    <Card.Text>
                    Allows users to create and sign into an account, add a hike with a title, image, and description, and view all of their posts on a map with the corresponding longitude and latitude of that peak.
                    </Card.Text>
                    <Card.Link href="https://github.com/rachelemmer/hike-frontend" target="_blank">
                        <img src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} 
                        alt="github-icon" className="github-icon"/>
                    </Card.Link>
                </Card.Body>
            </Card>
            <Card className="project-card" style={{ width: '18rem' }}>
                <Card.Img className="project-photo" variant="top" src="https://i.imgur.com/6sRFvH8.png" />
                <Card.Body>
                    <Card.Title>Book Finder</Card.Title>
                    <Card.Text>
                    Allows users to create an account with a username and password, sign in and out of their account, search books by title, author or keyword, click a book to add it to their favorites and click it again to delete it.
                    </Card.Text>
                    <Card.Link href="https://github.com/rachelemmer/book-app-frontend" target="_blank">
                        <img src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} 
                        alt="github-icon" className="github-icon"/>
                    </Card.Link>
                </Card.Body>
            </Card>
            <Card className="project-card" style={{ width: '18rem' }}>
                <Card.Img className="project-photo" variant="top" src="https://i.imgur.com/aClmbEz.png" />
                <Card.Body>
                    <Card.Title>Take A Hike</Card.Title>
                    <Card.Text>
                    This application allows users to browse all of Colorado's Fourteeners, search for them by name, and filter them by difficulty. They may also view the mountain's details and route information.
                    </Card.Text>
                    <Card.Link href="https://github.com/rachelemmer/fourteener_project" target="_blank">
                        <img src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} 
                        alt="github-icon" className="github-icon"/>
                    </Card.Link>
                </Card.Body>
            </Card>
            <Card className="project-card" style={{ width: '18rem' }}>
                <Card.Img className="project-photo" variant="top" src="https://i.imgur.com/t9PuQlQ.png" />
                <Card.Body>
                    <Card.Title>Valentine's Activities</Card.Title>
                    <Card.Text>
                    Allows users to find activities for the Valentine's Day holiday. The user can find activities based on the category, and can create and delete an activity, as well as update the location of an activity.
                    </Card.Text>
                    <Card.Link href="https://github.com/rachelemmer/Valentine_frontend" target="_blank">
                        <img src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} 
                        alt="github-icon" className="github-icon"/>
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
