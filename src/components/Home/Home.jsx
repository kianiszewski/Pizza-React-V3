import Header from "../Header/Header";
import CardPizza from "../CardPizza/CardPizza";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { pizzas } from "../../assets/pizza"; //importandose desde un archivo js


const Home = () => {
  return (
    <Container>
      <Header title="Pizzeria Mamma Mia" subtitle="Tenemos las mejores pizzas que podrás encontrar" />
      <Row>
        {pizzas.map((pizza) => (
          <Col md={4} className="mb-4" key={pizza.id}>
            <CardPizza
              name={pizza.name} //recibiendo props desde el archivo js pizzas
              price={pizza.price}//recibiendo props desde el archivo js pizzas
              ingredients={pizza.ingredients.map(ingredient => `${ingredient}`)}//recibiendo props desde el archivo js pizzas, tipo array
              img={pizza.img} //recibiendo props desde el archivo js pizzas
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Home;
