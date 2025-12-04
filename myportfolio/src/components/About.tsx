import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaDownload, FaCode, FaDatabase, FaGraduationCap, FaUniversity } from 'react-icons/fa';

const About = () => {
  const [selectedResume, setSelectedResume] = useState('software');
  
  const resumes = {
    software: {
      title: 'Software Development',
      icon: <FaCode />,
      file: 'Ashwitha C_Resume.pdf',
      color: 'primary'
    },
    data: {
      title: 'Data Science',
      icon: <FaDatabase />,
      file: 'Ashwitha.C_Resume.pdf',
      color: 'info'
    }
  };

  return (
    <section id="about" className="py-5" style={{ background: '#f8f9fa' }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">About Me</h2>
            <p className="lead text-muted">
              Full-Stack Developer & Data Scientist
            </p>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-center">
                <img 
                  src="/Ashwitha C.jpeg" 
                  alt="Ashwitha Profile" 
                  style={{
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '6px solid white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  }}
                  className="img-fluid mb-4"
                />
                
                {/* Academic Info - Clean Stacked Layout */}
                <div 
                  className="p-3 mx-auto" 
                  style={{ 
                    maxWidth: '300px',
                    background: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                  }}
                >
                  <div className="d-flex align-items-start mb-2">
                    <FaGraduationCap className="text-primary mt-1 me-2" />
                    <div className="text-start">
                      <h6 className="fw-bold mb-1" style={{ color: '#2c3e50' }}>
                        M.Sc. Decision & Computing Sciences
                      </h6>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start">
                    <FaUniversity className="text-secondary mt-1 me-2" />
                    <div className="text-start">
                      <p className="mb-0" style={{ color: '#6c757d' }}>
                        Coimbatore Institute of Technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={7}>
            <Card className="border-0 shadow-lg" style={{ borderRadius: '15px' }}>
              <Card.Body className="p-4 p-md-5">
                <h3 className="fw-bold mb-3">Full Stack Developer | Data Analyst</h3>
                <p className="mb-3">
                  I am currently pursuing my M.Sc. in Decision and Computing Sciences at Coimbatore Institute of Technology. I have a strong interest in technology and innovation, and I enjoy learning new programming languages and tools.
                </p>
                <p className="mb-4">
                  With expertise in both software development and data science, I bring a unique perspective to solving complex problems and building impactful solutions.
                </p>
                
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Academic Achievement</h5>
                  <Badge bg="primary" className="fs-6 p-3" style={{ borderRadius: '10px' }}>
                    CGPA: 8.98 (till 4th semester)
                  </Badge>
                </div>
                
                {/* Resume Selector */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Select Resume Type</h5>
                  
                  {/* Resume Type Selection */}
                  <div className="d-flex gap-3 mb-4">
                    <Button
                      variant={selectedResume === 'software' ? 'primary' : 'outline-primary'}
                      onClick={() => setSelectedResume('software')}
                      className="flex-grow-1 d-flex align-items-center justify-content-center py-3"
                      style={{ borderRadius: '10px' }}
                    >
                      <FaCode className="me-2" size={20} />
                      Software Development
                    </Button>
                    
                    <Button
                      variant={selectedResume === 'data' ? 'info' : 'outline-info'}
                      onClick={() => setSelectedResume('data')}
                      className="flex-grow-1 d-flex align-items-center justify-content-center py-3"
                      style={{ borderRadius: '10px' }}
                    >
                      <FaDatabase className="me-2" size={20} />
                      Data Science
                    </Button>
                  </div>
                  
                  {/* Download Button */}
                  <Button 
                    variant={selectedResume === 'software' ? 'primary' : 'info'}
                    size="lg"
                    href={resumes[selectedResume as keyof typeof resumes].file}
                    target="_blank"
                    className="w-100 py-3"
                    style={{ 
                      borderRadius: '10px',
                      fontWeight: '600'
                    }}
                  >
                    <FaDownload className="me-2" />
                    Download {selectedResume === 'software' ? 'Software' : 'Data'} Resume
                  </Button>
                </div>
                
                {/* Action Buttons */}
                <div className="d-flex gap-3 mt-4">
                  <Button 
                    variant="outline-primary" 
                    href="#projects"
                    className="flex-grow-1 py-2"
                    style={{ borderRadius: '10px' }}
                  >
                    View Projects
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    href="#contact"
                    className="flex-grow-1 py-2"
                    style={{ borderRadius: '10px' }}
                  >
                    Contact Me
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;