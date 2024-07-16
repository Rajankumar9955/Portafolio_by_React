
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Skills=()=>{
    return(
        <>
        
        <Container>
            <div id='skills'>
           <h2 style={{marginLeft:"45%",marginTop:"50px"}}> SKILLS</h2>
        <Row>
        <Col >
    <div id='box1'>  
        <ul id="list1">
            <p id='soft'>SOFTWARE SKILLS</p>
            <ul id="progress">
                <label for="file">C:</label>
                <progress value="32" max="100"> 32%</progress><br />
                <label for="coding">C++:</label>
                <progress value="60" max="100">60%</progress><br />
                <label for="coding">Java:</label>
                <progress value="70" max="100">72%</progress><br />

                <label for="coding">Html:</label>
                <progress value="90" max="100">90%</progress><br />
                <label for="coding">Css:</label>
                <progress value="65" max="100">65%</progress><br />
                <label for="coding">Java-script:</label>
                <progress value="20" max="100">20%</progress><br />
                <label for="coding">Python:</label>
                <progress value="10" max="100">0%</progress><br />
                <label for="coding">Web-Dev:</label>
                <progress value="40" max="100">40%</progress><br />
            </ul>
        </ul>  
    </div>  
        </Col>
          
          <Col>
           <div id='box2'>
           <ul class="lang ">
            <p>LANGUAGE</p>
            <ul id="language">
                <label for="language">English:</label>
                <progress value="80" max="100">80%</progress><br />
                <label for="language">Hindi:</label>
                <progress value="95" max="100">95%</progress><br />
                <label for="language">Bhojpuri:</label>
                <progress value="90" max="100">90%</progress><br />
                <label for="language">Some language:</label>
                <progress value="10" max="100">10%</progress><br />
            </ul>
        </ul>

           </div>
         </Col>

         <Col>
         <div id='box3'>

         <ul class="personal">
            <p>PERSONAL SKILLS</p>
            <ul id="sill">
             <p>Team work</p>
             <p>Communication skills</p>
             <p>Organization</p>
             <p>Team Management</p>
             <p>Problem solving Skills</p>
            </ul>
        </ul>

         </div>
         </Col>
          </Row>
          </div>
        </Container>
        
        
        </>
    )
}
export default Skills;