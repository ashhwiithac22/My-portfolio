import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaTrophy, FaUsers, FaCalendarAlt, FaCode, FaMedal, FaFilePdf, FaMapMarkerAlt } from 'react-icons/fa';

const Hackathons = () => {
  const hackathons = [
    {
      title: "Smart India Hackathon 2024",
      organizer: "Government of India",
      date: "March 2024",
      location: "National Level",
      icon: <FaTrophy />,
      description: "Participated in the national-level Smart India Hackathon, working on developing innovative solutions for real-world challenges. Collaborated with a team to create a prototype addressing a significant problem statement within the given timeframe.",
      skills: ["Problem Solving", "Team Collaboration", "Rapid Prototyping", "Presentation", "Innovation"],
      achievement: "Certificate of Participation",
      pdfLink: "/hackathon-certificate.pdf" // Replace with your actual filename
    }
  ];

  return (
    <section id="hackathons" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Hackathons</h2>
            <p className="lead text-muted">
              Competitive coding events and innovation challenges
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          {hackathons.map((hackathon, index) => (
            <Col lg={8} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm card-hover">
                <Card.Body className="p-4">
                  <Row className="align-items-center">
                    <Col md={3} className="text-center mb-3 mb-md-0">
                      <div className="text-primary mb-3" style={{ fontSize: '4rem' }}>
                        {hackathon.icon}
                      </div>
                      <Badge bg="warning" text="dark" className="px-3 py-2 fs-6">
                        <FaMedal className="me-2" />
                        {hackathon.achievement}
                      </Badge>
                    </Col>
                    
                    <Col md={9}>
                      <Card.Title className="fw-bold mb-2">{hackathon.title}</Card.Title>
                      
                      <div className="mb-3">
                        <Badge bg="primary" className="me-2 mb-2">
                          <FaCalendarAlt className="me-1" /> {hackathon.date}
                        </Badge>
                        <Badge bg="info" className="me-2 mb-2">
                          <FaUsers className="me-1" /> {hackathon.organizer}
                        </Badge>
                        <Badge bg="secondary" className="mb-2">
                          <FaMapMarkerAlt className="me-1" /> {hackathon.location}
                        </Badge>
                      </div>
                      
                      <Card.Text className="text-muted mb-3">
                        {hackathon.description}
                      </Card.Text>
                      
                      <div className="mb-3">
                        <h6 className="fw-bold mb-2">Skills Demonstrated:</h6>
                        {hackathon.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            bg="outline-warning" 
                            className="me-1 mb-1"
                            style={{ 
                              color: '#ffc107', 
                              border: '1px solid #ffc107',
                              backgroundColor: 'transparent'
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="mt-3">
                        <Button 
                          variant="outline-warning" 
                          size="sm" 
                          href={hackathon.pdfLink} 
                          target="_blank"
                        >
                          <FaFilePdf className="me-2" /> View Certificate
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Hackathons;