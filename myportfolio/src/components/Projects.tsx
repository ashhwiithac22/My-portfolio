import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "CodeBuddy Learning Platform",
      description: "AI powered learning and Interview preparation platform",
      technologies: ["Angular", "Typescript", "Node.js", "Express", "MongoDB Atlas", "Gemini API", "JWT"],
      liveLink: "https://codebuddy-backend-oind.onrender.com/",
      githubLink: "https://github.com/ashhwiithac22/codebuddyapp",
    },

    {
      title: "Livelink- Blood Bank Management Application",
      description: "A full web application designed to streamline the blood donation and management process.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "https://lifelink-bloodbank.vercel.app/",
      githubLink: "https://github.com/ashhwiithac22/lifelink-bloodbank",
    },

    {
      title: "Financial AI Analytics Platform",
      description: "Financial Analytics AI Platform — Python-based Streamlit application for options pricing, implied volatility, live financial data analysis, and an AI-powered finance assistant.",
      technologies: ["Python", "Pandas", "Numpy", "yfinance","jax", "Streamlit"],
      liveLink: "https://financial-ai--analytics-platform.streamlit.app/",
      githubLink: "https://github.com/ashhwiithac22/Financial-AI--Analytics-Platform",
    },

     {
      title: "Phishing URL Detection Application",
      description: "A phishing URL detector web app using machine learning algorithms (Logistic Regression, Linear Regression, K-Means) with a Streamlit interface for real-time predictions.",
      technologies: ["Python", "Cross Validation", "Xgboost", "SVM","Streamlit"],
      liveLink:"https://phishing-url-classification.streamlit.app/",
      githubLink: "https://github.com/ashhwiithac22/phishing-url-detector-application",
    },
    
      {
      title: "SmartCivic Complaint Analyzer Using NLP",
      description: "A comprehensive platform for citizens to report civic issues with real-time NLP analysis for faster municipal response ",
      technologies: ["Python", "TF-IDF", "Scikit-learn", "Multinomial Naive Bayes","Plotly", "TextBlob"],
      liveLink: "https://complaint-analyzer-using-nlp.streamlit.app/",
      githubLink: "https://github.com/ashhwiithac22/Smart-Civic-Complaint-Analyzer-with-NLP",
    },

      {
      title: "Student Dropout Prediction Using ML",
      description: "A comprehensive Machine Learning system that predicts student dropout risk using advanced analytics and predictive modeling.",
      technologies: ["Python", "Pandas", "Numpy", "Streamlit", "Boosting", "Random Forest", "K-Nearest Neighbors", "SVM"],
      liveLink: "https://student-dropout-prediction-ml.streamlit.app/",
      githubLink: "https://github.com/ashhwiithac22/student-dropout-prediction-ml",
    },

    {
      title: "Ride Share Optimizer",
      description: "Ride Sharing and Trip Planner.A Python + Streamlit app that uses graph algorithms to optimize cost-efficient, multi-stop and ride-sharing routes.",
      technologies: ["Python", "Pandas", "BFS", "Prim's", "Branch and Bound", "Streamlit", "Advanced Data Structures"],
      liveLink: "https://rideshareoptimizer.streamlit.app/",
      githubLink: "https://github.com/ashhwiithac22/RideShare-Optimizer",
    },
  
    {
      title: "Customer Relationship Management",
      description: "A Java Swing–based CRM desktop application with MySQL backend to manage customers, sales orders, and transactions through a role-based user interface",
      technologies: ["Java", "Mysql", "JDBC"],
      githubLink: "https://github.com/ashhwiithac22/Customer_Realtionship_Management-System",
    },

  
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">My Projects</h2>
            <p className="lead text-muted">
              A showcase of my work and technical skills
            </p>
          </Col>
        </Row>
        
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm card-hover position-relative">
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    {project.description}
                  </Card.Text>
                  
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} bg="secondary" className="me-1 mb-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="d-flex gap-2">
                    <Button 
                      variant="primary" 
                      size="sm"
                      href={project.liveLink}
                      target="_blank"
                      className="flex-fill"
                    >
                      <FaExternalLinkAlt className="me-1" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      href={project.githubLink}
                      target="_blank"
                      className="flex-fill"
                    >
                      <FaGithub className="me-1" />
                      Code
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

export default Projects;
