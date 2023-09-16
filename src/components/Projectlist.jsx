import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
// import adminpanel from '/src/assets/images/adminpanel.jpg'
import olximage from "/src/assets/images/olximage.jpg";
import netfliximage from "/src/assets/images/netflix.jpg";
import gridlinesbuilders from "/src/assets/images/Gridlinesbuilders.jpg";
import charlespizza from "/src/assets/images/pizza.jpg";
import todolist from "/src/assets/images/todolist.jpg";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground" style={{height : "70rem"}}>
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={adminpanel}
                isBlog={false}
                title="Smart Safety Management System (SSMS)"
                description="Our project aims to create a Smart Safety Management System (SSMS) using Oak D cameras and wearable gear for manufacturing industries. It ensures worker safety, accountability, and efficiency through real-time monitoring, automated notifications, and entrance security."
                ghLink="https://github.com/zubair480/UltraHack-Transatlantic"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Smart CPM Parser"
                description="Our Amadeus Hackathon Project revolutionizes cargo message processing with a robust parsing tool inspired by Grammarly. By recognizing cargo message grammars and automatically correcting errors, it significantly reduces manual effort, enhances data accuracy, and streamlines cargo handling operations."
                ghLink="https://github.com/zubair480/amadeus-hackathon-proj"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Codic"
                description="In this project, we employed Python, Whisper API, and OpenAI API to create an innovative voice-activated image generation app. By leveraging OpenAI's Whisper, GPT-3, and Codex APIs, we developed a user-friendly interface using React Native and Django, enabling users to generate images from spoken descriptions."
                ghLink="https://github.com/QU01/OpenAIHackatonApp"
              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Grid Line Builders"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Charlestown Pizza"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
