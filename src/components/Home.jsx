import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Button from 'react-bootstrap/Button';

const Home=()=>{
 
    return(
        <>
        
        <Container>

          <div id='rajan'>

        <Row >
        <Col style={{marginTop:"100px", marginLeft:"30px"}}>
             Hello I'M
             <h1>Rajan kumar
             </h1>
             <h4>Full Stack Developer</h4>
             Lorem ipsum dolor sit amet <br />
             consectetur adipisicing elit. <br />Voluptates, et saepe delectus vero <br /> iste voluptatibus  quibusdam tempora <br />laboriosam modi dolorem aperiam dolore sit <br /> mollitia, hic quod ipsa laudantium totam optio. <br />
            <h2 style={{marginTop:"20px"}}>
             <Button variant="outline-primary">Email </Button>{' '} 
             <Button variant="outline-info">Get Resume</Button>{' '}
             </h2> 
        </Col>
        <Col style={{marginTop:"100px", marginLeft:"100px"}}>
        
        <Image src="public/images/Raj.jpg"  thumbnail style={{height:"320px",width:"300px",marginLeft:"40px"}}/>
        
        </Col>
      </Row>
     
     
      </div>

        </Container>


        </>
    )
}

export default Home;