import { useFormik } from "formik";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../database/firebase";
import "./formulario.css"

const Formulario = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactReason: ""
    },
    onSubmit: async function (values, { resetForm }) {
      console.log(values)
      resetForm({ values: "" })
      try {
        const docRef = await addDoc(collection(db, "Contactos"), values);
        console.log("ID: ", docRef.id);
      } catch (e) {
        console.error("Error al agregar: ", e);
      }
    }
  })

  return (
   
                <div className=" bg-black">
                  <Form onSubmit={handleSubmit} className="bg-black" >
                    <Form.Group>
                      <Form.Label htmlFor='name' className="text-white"> Nombre </Form.Label>
                      <Form.Control id='name' name='name' type="text" value={values.name} onChange={handleChange} placeholder="Ingresa tu Nombre" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor='email' className="text-white">Correo</Form.Label>
                      <Form.Control id='email' name='email' type="email" value={values.email} onChange={handleChange} placeholder="Ingresa tu Correo" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor='contactReason' className="text-white">Motivo</Form.Label>
                      <textarea id='contactReason' name='contactReason' value={values.contactReason} onChange={handleChange} placeholder="¿Que necesitas?"></textarea>
                    </Form.Group>
                    <div className="mt-5">
                      <Button variant="warning" type='submit' >Enviar</Button>
                    </div>
                  </Form>
                </div>
             

  )
}
export default Formulario;

// hacer un post al farebase, para que se almacene, voy a tener que ocupar el servicio de autenticacion de firebase**, y el de firestore, ademas cuando quiera consumir esta base de datos, lo debo hacer por medio de useeffect y useState, addDoc, añadir documento
