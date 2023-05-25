import './style/navbar.css'

import ModalFor from "./ModalFor"

function NavBar({modalCambio,modal,CrearCrud,obtenerInfo,actualizarCrud}) {
  
  
  
  
  return (
    <nav className="navbar  ">
        
            <img src="/admin.png" loading="lazy" width={60} />
        

        
            <button className="navbar_btn  " 
            onClick={()=> modalCambio()}
            >
            <i class="fa-solid fa-plus mx-3"></i> 
            Crear Usuario</button>
            
        {
          modal ? <ModalFor modalCambio={modalCambio} CrearCrud={CrearCrud} obtenerInfo={obtenerInfo} actualizarCrud={actualizarCrud}/> : ''
        }

    </nav>
  )
}

export default NavBar