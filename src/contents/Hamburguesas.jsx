import React from "react";
import { collection, getDocs } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { BurgerList } from "../components/BurgerList";
import { BurgerItem } from "../components/BurgerItem";
import { db } from "../database/firebase";

const Hamburguesas = () => {

    const [burger, setBurger] = React.useState([]);
    const [bebida, setBebida] = React.useState([]);
    React.useEffect(() => {


        try {
            const readData = async (coleccion) => {
                const datos = await getDocs(collection(db, coleccion));
                const arrDocumentos = datos.docs.map(doc => (doc.data()));
                setBurger(arrDocumentos);
            }
            readData("Burger");
        } catch (error) {
            console.error(error);
        }


        try {
            const readData = async (coleccion) => {
                const datos = await getDocs(collection(db, coleccion));
                const arrDocumentos = datos.docs.map(doc => (doc.data()));
                setBebida(arrDocumentos);
            }
            readData("Bebida");
        } catch (error) {
            console.error(error);
        }









    }, []);

    return (
        <div>
            <div>
                <h1>Hamburguesass</h1>
                <BurgerList>
                    {
                        burger.map(B => (
                            <BurgerItem
                                key={B.nomb.toString()}
                                nomb={B.nomb}
                                info={B.info}
                                img={B.img}
                                precio={B.precio} />
                        ))
                    }
                </BurgerList>
            </div>


            <div>
                <h1>Bebidas</h1>
                <BurgerList>
                    {
                        bebida.map(B => (
                            <BurgerItem
                                key={B.nomb.toString()}
                                nomb={B.nomb}
                                info={B.info}
                                img={B.img}
                                precio={B.precio} />
                        ))
                    }
                </BurgerList>
            </div>
            <div>
                {
            bebida.map(B => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={B.img} />
                    <Card.Body>
                        <Card.Title>{B.nomb}</Card.Title>
                        <Card.Text>
                        {B.info}
                        </Card.Text>
                        <Button variant="primary">$ {B.precio}</Button>
                    </Card.Body>
                </Card>
                ))
            }
            </div>
        </div>









    );


}

export default Hamburguesas; 