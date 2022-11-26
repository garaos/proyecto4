import React from "react";
import { collection, getDocs } from 'firebase/firestore';


import { BurgerList } from "../components/BurgerList";
import { BurgerItem } from "../components/BurgerItem";
import { BebidaList } from "../components/BebidaList";
import { BebidaItem } from "../components/BebidaItem";
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
            <div className="pt-5 text-center"><h1>Hamburguesas</h1></div>
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

            <div className="pb-5">
                <div className="pt-5 pb-2 text-center"><h1>Bebidas</h1></div>
                <BebidaList>
                    {
                        bebida.map(B => (
                            <BebidaItem
                                key={B.nomb.toString()}
                                nomb={B.nomb}
                                info={B.info}
                                img={B.img}
                                precio={B.precio} />
                        ))
                    }
                </BebidaList>

            </div>
        </div>
    );
}

export default Hamburguesas; 