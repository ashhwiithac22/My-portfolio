import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaTrophy, FaUsers, FaCalendarAlt, FaMedal, FaFilePdf, FaMapMarkerAlt, FaFileImage, FaCogs } from 'react-icons/fa';

const Hackathons = () => {
  const hackathons = [
    {
      title: "Google Cloud Agentic AI Day Hackathon",
      organizer: "Google Cloud & Hack2skill",
      date: "September 2025",
      location: "Online/National Level",
      icon: <FaTrophy />,
      description: "Developed and submitted an innovative AI agent concept aimed at solving real-world challenges through Agentic AI",
      skills: ["Agentic AI", "Google Cloud AI", "Problem Solving", "Prototyping"],
      achievement: "Participation Recognition",
      pdfLink: "/AgenticAI.png",
      fileType: "image"
    },
    {
      title: "EY Techathon 6.0 – Predictive Maintenance AI Agent",
      organizer: "EY (Ernst & Young) & Industry Partners",
      date: "September – November 2025",
      location: "Online / National Level",
      icon: <FaCogs />,
      description: "Designed an Agentic AI system to predict vehicle breakdowns and provide feedback to improve reliability and customer experience.",
      skills: ["Agentic AI", "Predictive Analytics", "AI Automation","Team Collaboration"],
      achievement: "Shortlisted for Round2",
      pdfLink: "/ey-techathon-6.0-predictive-maintenance.pdf",
      fileType: "pdf"
    }
  ];

  return (
    <section id="hackathons" className="py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">
              <FaTrophy className="me-2" style={{ color: '#007bff' }} /> 
              Hackathons
            </h2>
            <p className="lead text-muted">
              Competitive coding events and innovation challenges
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {hackathons.map((hackathon, index) => (
            <Col lg={6} md={12} key={index}>
              <Card className="h-100 border-0 shadow-sm card-hover" style={{ 
                borderTop: '4px solid #007bff',
                borderRadius: '10px'
              }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="me-3" style={{ fontSize: '2.5rem', color: '#007bff' }}>
                      {hackathon.icon}
                    </div>
                    <div>
                      <Card.Title className="fw-bold mb-1" style={{ color: '#007bff' }}>
                        {hackathon.title}
                      </Card.Title>
                      <div className="d-flex flex-wrap align-items-center mb-2">
                        <Badge className="me-2 mb-1" style={{ 
                          backgroundColor: '#007bff', 
                          color: 'white',
                          border: 'none'
                        }}>
                          <FaCalendarAlt className="me-1" /> {hackathon.date}
                        </Badge>
                        <Badge className="me-2 mb-1" style={{ 
                          backgroundColor: '#0dcaf0', 
                          color: 'white',
                          border: 'none'
                        }}>
                          <FaUsers className="me-1" /> {hackathon.organizer}
                        </Badge>
                        <Badge className="mb-1" style={{ 
                          backgroundColor: '#6c757d', 
                          color: 'white',
                          border: 'none'
                        }}>
                          <FaMapMarkerAlt className="me-1" /> {hackathon.location}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <Card.Text className="text-muted mb-3">
                    {hackathon.description}
                  </Card.Text>
                  
                  <div className="mb-3">
                    <h6 className="fw-bold mb-2" style={{ color: '#007bff' }}>Skills Demonstrated:</h6>
                    <div className="d-flex flex-wrap">
                      {hackathon.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          className="me-1 mb-1"
                          style={{ 
                            backgroundColor: '#007bff',
                            color: 'white',
                            fontWeight: '500',
                            border: 'none'
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="d-flex align-items-center">
                      <Badge className="px-3 py-2" style={{ 
                        backgroundColor: '#0056b3',
                        color: 'white',
                        fontWeight: '600',
                        border: 'none'
                      }}>
                        <FaMedal className="me-2" />
                        {hackathon.achievement}
                      </Badge>
                    </div>
                    
                    <Button 
                      variant="primary"
                      size="sm"
                      href={hackathon.pdfLink} 
                      target="_blank"
                      style={{ 
                        backgroundColor: '#007bff',
                        borderColor: '#007bff',
                        color: 'white',
                        fontWeight: '500'
                      }}
                    >
                      View Certificate
                      {hackathon.fileType === "pdf" ? (
                        <FaFilePdf className="ms-2" />
                      ) : (
                        <FaFileImage className="ms-2" />
                      )}
                    </Button>
                  </div>
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