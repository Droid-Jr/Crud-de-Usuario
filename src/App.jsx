
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import CardsCrud from './components/CardsCrud'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [Modal, setModal] = useState(false)

  const [CrudData, setCrudData] = useState()

  const [ObtenerInfo, setObtenerInfo] = useState(  )
  
  const modalCambio = () => {
    setModal(!Modal)
  }

  const getAll = () => {
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res => setCrudData(res.data))
    .catch(err => console.log(err))

  }

  useEffect(() => {
   getAll()
  }, [])

  const CrearCrud = data => {
    const url = 'https://users-crud.academlo.tech/users/'
    axios.post(url, data)
    .then(() => getAll())
    .catch(err => console.log(err))
  }
  const eliminarCrud = crud =>{
    axios.delete(`https://users-crud.academlo.tech/users/${crud}/`)
    .then(() => getAll())
    .catch(err => console.log(err))
  }
  
const obtener = data => {
  const url = `https://users-crud.academlo.tech/users/${data}/`
  axios.get(url)
  .then(res =>  setObtenerInfo(res.data))
  .catch(err => console.log(err))
}

const actualizarCrud = infoActual => {
  axios.put(`https://users-crud.academlo.tech/users/${infoActual.id}/`,infoActual)
  .then(() => getAll(),
  setObtenerInfo( null ))
  .catch(err => console.log(err))
}



  return (
    <div className='w-[100%] h-[70px] bg-[#2E0E61]  '>
     <NavBar 
     modalCambio={modalCambio} 
     modal={Modal} 
     CrearCrud={CrearCrud}
     obtenerInfo={ObtenerInfo}
     actualizarCrud={actualizarCrud}
     />
     <div className='w-[100%] min-h-screen  bg-[url("/fondo2.gif")] bg-no-repeat bg-cover bg-center m-auto gap-3 py-3   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center'>
     {
       CrudData?.map(cruds => <CardsCrud key={cruds.id} info={cruds} eliminar={eliminarCrud} capturar={obtener} open={modalCambio}/>)
      }
      </div>
    </div>
  )
}

export default App
