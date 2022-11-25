import { useFormik } from "formik";
import Button from 'react-bootstrap/Button';
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

    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Nombre</label>
      <input id='name' name='name' type="text" value={values.name} onChange={handleChange}></input>

      <label htmlFor='email'>Correo</label>
      <input id='email' name='email' type="email" value={values.email} onChange={handleChange}></input>

      <label htmlFor='contactReason'>Motivo</label>
      <textarea id='contactReason' name='contactReason' value={values.contactReason} onChange={handleChange}></textarea>

      <div className="mb-2 mt-3">
        <Button variant="warning" type='submit' >Enviar</Button>
      </div>
    </form>
  )
}
export default Formulario;

// hacer un post al farebase, para que se almacene, voy a tener que ocupar el servicio de autenticacion de firebase**, y el de firestore, ademas cuando quiera consumir esta base de datos, lo debo hacer por medio de useeffect y useState, addDoc, añadir documento
