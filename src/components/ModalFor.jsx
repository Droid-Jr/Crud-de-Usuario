import './style/crudmodal.css'
import { useEffect } from "react";
import { useForm } from "react-hook-form";


function ModalFor({modalCambio,CrearCrud,obtenerInfo,actualizarCrud}) {
  
  const {register,handleSubmit,reset} = useForm()
  
  let info = {
    first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday:""
   };


  const closeModal = () =>{
    modalCambio(false)
   }
  
   

   useEffect(() => {
    if(obtenerInfo){
      reset(obtenerInfo)
   }else{
     reset(info)
    }
   }, [obtenerInfo])
    


   const crearC = data =>{
    if(obtenerInfo){
      actualizarCrud(data);
      closeModal();
    }else{
      CrearCrud(data);
    closeModal();
    
    }
    
   }
   
   

  
  



   
  
    return (
      

    
      <form onSubmit={handleSubmit(crearC)} className="formulario bg-gradient-to-r from-[#420101] to-[#02013a]" >
      <button onClick={closeModal}>
        <i class="fa-regular fa-circle-xmark formulario_i "></i>
      </button>
      <div className="formulario_caja ">
          <label htmlFor="first_name">Nombre</label>
        <input className="formulario_caja_input" id="first_name" placeholder="Colocar Nombre" type="text" {...register('first_name')} />
      </div>
      <div className="formulario_caja">
          <label htmlFor="last_name">Apellido</label>
          <input className="formulario_caja_input" id="last_name" type="text" placeholder="Colocar Apellido" {...register('last_name')} />
      </div>
      <div className="formulario_caja">
          <label htmlFor="email">Email</label>
          <input className="formulario_caja_input" id="email" type="email" placeholder="Colocar Email" {...register('email')} />
      </div>
      <div className="formulario_caja">
          <label htmlFor="password">Password</label>
          <input className="formulario_caja_input" id="password" type="password" placeholder="Colocar contraseña" {...register('password')} />
      </div>
      <div className="formulario_caja">
          <label htmlFor="birthday">Cumpleaños</label>
          <input className="formulario_caja_bir" id="birthday" type="date" placeholder="Colocar Cumpleaños" {...register('birthday')}  />
      </div>
      <div className="formulario_btn">

      <button className="formulario_btn_1 " type="submit"><i class="fa-solid fa-user mx-2"></i>Crear Usuario</button>
      <button onClick={() => actualizarCrud()} className="formulario_btn_1"><i class="fa-solid fa-pen-to-square mx-2"></i>Actualisar</button>
      </div>
  </form>
      
  
  )

}

export default ModalFor