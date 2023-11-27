import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "./Image"
import Description from './Description';
import Price from './Price';
import Name from "./Name"
function App() {
  let name="mo"
  return (
    <Card style={{ width: '18rem' }}>
  <Image />
    <Card.Body>
      <Card.Title> <Name/> </Card.Title>
      <Card.Text>
       < Description />
      </Card.Text>
    
      <Card.Title> <Price/> </Card.Title>
    </Card.Body>
    {name ? `hello ${name}`:"hello there" }
  </Card>
  );
}

export default App;
