import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { SiHackerrank, SiGeeksforgeeks, SiLeetcode, SiCodechef, SiHackerearth } from 'react-icons/si';

const CodingProfiles = () => {
  const profiles = [

      {
      platform: "LeetCode",
      icon: <SiLeetcode />,
      username: "@OOLY6Vc2Xe",
      link: "https://leetcode.com/u/OOLY6Vc2Xe/",
      description: "Consistent problem solver with a strong focus on algorithms, SQL queries",
      color: "#ffa500"
    },
    {
      platform: "GeeksforGeeks",
      icon: <SiGeeksforgeeks />,
      username: "@ashwithacax7l",
      link: "https://www.geeksforgeeks.org/user/ashwithacax7l/",
      description: "Completed multiple problem-solving exercises on GeeksforGeeks, focusing on Python basics, arrays, strings, loops, and logical reasoning to strengthen core programming skills.",
      color: "#0f7b0f"
    },
        {
      platform: "HackerRank",
      icon: <SiHackerrank />,
      username: "@ashwithacchandru",
      link: "https://www.hackerrank.com/profile/ashwithacchandru",
      description: "Practiced and solved multiple coding problems in Python and SQL, building strong foundations in programming and database queries.",
      color: "#2ec866"
    }
  
  ];

  return (
    <section id="coding-profiles" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Coding Profiles</h2>
            <p className="lead text-muted">
              Check out my competitive programming journey
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          {profiles.map((profile, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm card-hover text-center">
                <Card.Body className="p-4">
                  <div 
                    className="mb-3" 
                    style={{ 
                      fontSize: '4rem', 
                      color: profile.color 
                    }}
                  >
                    {profile.icon}
                  </div>
                  
                  <Card.Title className="fw-bold mb-2">{profile.platform}</Card.Title>
                  
                  <p className="text-muted mb-1">{profile.username}</p>
                  
                  <Card.Text className="mb-3">
                    {profile.description}
                  </Card.Text>
                  
                  <div className="mb-3">
                    <small className="text-primary fw-bold">
                    </small>
                  </div>
                  
                  <Button 
                    variant="outline-primary"
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-100"
                  >
                    View Profile
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CodingProfiles;