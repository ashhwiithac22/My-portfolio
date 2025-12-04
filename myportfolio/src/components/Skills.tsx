import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C", "R", "SQL", "HTML5", "CSS3","MongoDB"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Angular", "Node.js", "Bootstrap", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "Tools & Platforms",
      skills: ["VS Code", "GitHub", "Jupyter Notebook", "IntelliJ IDEA", "MySQL"]
    },
    {
      title: "Other Skills",
      skills: ["Data Visualization", "Machine Learning", "Cloud Computing", "Bug Hunting"]
    }
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Skills & Expertise</h2>
            <p className="lead text-muted">
              Technologies and tools I work with
            </p>
          </Col>
        </Row>
        
        <Row>
          {skillCategories.map((category, index) => (
            <Col lg={6} md={6} sm={12} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-primary text-white text-center">
                  <h5 className="mb-0 fw-bold">{category.title}</h5>
                </Card.Header>
                <Card.Body className="d-flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} bg="light" text="dark" className="p-2 fs-6 shadow-sm">
                      {skill}
                    </Badge>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
