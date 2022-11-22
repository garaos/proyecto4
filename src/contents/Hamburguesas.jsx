import React from "react";
import { collection, getDocs } from 'firebase/firestore';

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
        </div>









    );


}

export default Hamburguesas; 