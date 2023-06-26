import { Container, Row } from 'react-bootstrap'
import CategorieCard from '../../Categorie/CategorieCard/CategorieCard'
import item from "../../../assets/images/clothe.png";
import item1 from "../../../assets/images/labtop.png";
import item2 from "../../../assets/images/laptops.png";
const CategorieContainer = () => {
    return (
        <Container>
            <h4 className="my-2">All Categories</h4>
            <Row className="my-2 justify-content-around d-flex">
                <CategorieCard title="Phone" background="#f6f6f6" img={item} />
                <CategorieCard title="Phone" background="#f6f6f6" img={item1} />
                <CategorieCard title="Phone" background="#f6f6f6" img={item2} />
                <CategorieCard title="Phone" background="#f6f6f6" img={item} />
                <CategorieCard title="Phone" background="#f6f6f6" img={item1} />
                <CategorieCard title="Phone" background="#f6f6f6" img={item2} />
                <CategorieCard title="Phone" background="#f6f6f6" img={item} />
                <CategorieCard title="Phone" background="#f6f6f6" img={item1} />
                <CategorieCard title="Phone" background="#f6f6f6" img={item2} />
                <CategorieCard title="Phone" background="#f6f6f6" img={item} />
                <CategorieCard title="Phone" background="#f6f6f6" img={item1} />
                <CategorieCard title="Phone" background="#f6f6f6" img={item2} />
            </Row>
        </Container>
    )
}

export default CategorieContainer