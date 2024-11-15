
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const About=()=>{
    return(
        <>
        <Container>
          <div id='about'>
        <Row>
        <Col >
        <Image id='phot' src="public/images/Raj1.png" rounded />
        </Col>

        <Col>
        <div id='avout'>
        <p id='me'>About me!</p>
        <p id='gmail'><a href="#">krajan92946@gmail.com</a></p>
        <p style={{fontSize:"20px",marginLeft:"5px"}}>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, iure dolor commodi aperiam nihil unde soluta quae delectus explicabo quas officiis aliquam quia impedit expedita assumenda iusto natus omnis laudantium!
 
        </p>
        </div> 
        
        </Col>
      </Row>
      </div>
        </Container>
        
        
        
        </>
    )
}
export default About;