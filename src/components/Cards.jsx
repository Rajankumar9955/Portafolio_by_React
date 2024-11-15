
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';const Cards=()=>{
    return(
        <>
       <Container>
      
       <div id="cani">
          <p id="hat">WHAT CAN I DO</p>
          <h4>It is easier to entrust the network the work to the <br />
          experts because they are able to provide  the best <br /> results with reliable quality.</h4>
        </div>
  
{/*        
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row> */}

<div id='croul'>
<Carousel fade id='Car'>
      <Carousel.Item>
        <img src="public/images/sbt-dash.webp" alt="" id='bo1'/>
        <Carousel.Caption>
          <h3>Flight booking</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="public/images/cripto.png" alt="" id='bo2'/>
        <Carousel.Caption>
          <h3 >Cripto Dashboard</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/images/beauti.avif" alt="" id='bo2' />
        <Carousel.Caption>
          <h3>Beauti Product</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>



        </Container> 
        </>
    )
}
export default Cards;