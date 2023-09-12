import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
        I'm a passionate MERN Stack developer actively seeking new opportunities.
        <br /> With a strong background in web development, including expertise in technologies like ReactJS, Redux, and JavaScript, 
          <br />I bring a proven track record of delivering clean and efficient code.  <br />
          My dedication to problem-solving and continuous learning drives my commitment to excellence in web development
        </p>


       
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/zubair480");
          }}
        >
          Say Hello
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>Zubair Zafar</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;