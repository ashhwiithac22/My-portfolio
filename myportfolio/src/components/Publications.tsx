import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaBook, FaGraduationCap, FaCalendar, FaUniversity, FaLink, FaFilePdf, FaUserGraduate, FaAward } from 'react-icons/fa';

const Publications = () => {
  const publications = [
    {
      title: "Phishing URL Detection Using Machine Learning",
      journal: "International Journal for Research Trends and Innovation",
      date: "September 2025",
      authors: "Dr. Yamuna Devi.N, Ashwitha C",
      description: "Research on applying ML algorithms to classify URLs as legitimate or phishing.",
      keywords: ["Machine Learning", "Cybersecurity", "Phishing Detection", "URL Classification", "Security Analytics", "Web Security"],
      volume: "Volume 10, Issue 9",
      paperId: "IJRTI2509050",
      paperLink: "/pap.pdf",
      certificateLink: "/pac.pdf"
    },
    {
      title: "Civic Complaint Analyzer Using NLP",
      conference: "International Journal of Innovative Research in Technology",
      date: "November 2025",
      authors: "Prof. Vani.K, Ashwitha C",
      description: "NLP-based system for analyzing civic complaints with automatic categorization and urgency detection.",
      keywords: ["NLP", "Machine Learning", "Smart Cities", "TF-IDF", "Naive Bayes", "Complaint Classification", "Citizen Engagement", "Municipal Management"],
      volume: "Volume 12, Issue 6",
      paperId: "IJIRT 187517",
      paperLink: "/nlpp.pdf",
      certificateLink: "/nlpc.pdf"
    }
  ];

  return (
    <section id="publications" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Research Publications</h2>
            <p className="lead text-muted">
              Academic papers and research contributions
            </p>
          </Col>
        </Row>
        
        <Row>
          {publications.map((publication, index) => (
            <Col lg={6} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm card-hover">
                <Card.Body className="p-4">
                  <div className="text-center mb-3">
                    <div className="text-primary" style={{ fontSize: '2.5rem' }}>
                      {publication.journal ? <FaBook /> : <FaGraduationCap />}
                    </div>
                  </div>
                  
                  <Card.Title className="fw-bold mb-2 text-center" style={{ color: '#007bff' }}>
                    {publication.title}
                  </Card.Title>
                  
                  <div className="text-center mb-3">
                    {publication.journal && (
                      <Badge bg="primary" className="me-2 mb-2">
                        <FaBook className="me-1" /> {publication.journal}
                      </Badge>
                    )}
                    {publication.conference && (
                      <Badge bg="info" className="me-2 mb-2">
                        <FaUniversity className="me-1" /> {publication.conference}
                      </Badge>
                    )}
                    <Badge bg="secondary" className="mb-2">
                      <FaCalendar className="me-1" /> {publication.date}
                    </Badge>
                  </div>
                  
                  {publication.volume && publication.paperId && (
                    <div className="text-center mb-3">
                      <small className="text-muted">
                        {publication.volume} | ID: {publication.paperId}
                      </small>
                    </div>
                  )}
                  
                  <div className="mb-3 text-center">
                    <h6 className="fw-bold mb-1">Authors:</h6>
                    <p className="text-muted mb-0">
                      <FaUserGraduate className="me-1" /> {publication.authors}
                    </p>
                  </div>
                  
                  <Card.Text className="text-muted mb-3 text-center">
                    {publication.description}
                  </Card.Text>
                  
                  <div className="mb-3">
                    <h6 className="fw-bold mb-2 text-center">Research Areas:</h6>
                    <div className="d-flex flex-wrap justify-content-center">
                      {publication.keywords.map((keyword, keywordIndex) => (
                        <Badge 
                          key={keywordIndex} 
                          className="me-1 mb-1"
                          style={{ 
                            backgroundColor: '#007bff',
                            color: 'white',
                            fontWeight: '500',
                            border: 'none',
                            fontSize: '0.8rem'
                          }}
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <Button 
                      variant="primary"
                      size="sm"
                      href={publication.paperLink} 
                      target="_blank"
                      style={{ 
                        backgroundColor: '#007bff',
                        borderColor: '#007bff',
                        color: 'white',
                        fontWeight: '500'
                      }}
                    >
                      <FaFilePdf className="me-2" /> View Paper
                    </Button>
                    
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      href={publication.certificateLink} 
                      target="_blank"
                      style={{ 
                        borderColor: '#007bff',
                        color: '#007bff',
                        fontWeight: '500'
                      }}
                    >
                      <FaAward className="me-2" /> Certificate
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

export default Publications;