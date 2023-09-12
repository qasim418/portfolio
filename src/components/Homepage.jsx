import { Container, Row, Col } from 'react-bootstrap'
import Text from '../components/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../pages/style.css";


function Home() {
  
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>Im Zubair Zafar</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/zubair480");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/zubair480");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => window.open('https://wa.me/+923039008284', '_blank')}
              className='socailmediabtn'><AiFillPhone className='icon' /></button>
            <button onClick={() => window.open("mailto:zubairzafar480@gmail.com?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email")}
              className='socailmediabtn'><AiFillMail className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home