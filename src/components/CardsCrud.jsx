import  './style/cardstyle.css'

function CardsCrud({info,eliminar,capturar,open}) {
 
  
    return (
      

    <article className="article ">
      <ul >
        <li className="article_li ">
      <h1 className='px-1'>{info?.first_name} {info?.last_name}</h1>
      
        </li>
        <li  className="article_lis">
          <h3 className="article_h3 ">Correo</h3>
          <h2 className="font-extrabold ">{info?.email}</h2>
        </li>
        <li  className="article_lis">
          <h3 className="font-semibold "><i class="fa-solid fa-gift px-2"></i>{info?.birthday}</h3>
        </li>
        <div className="article_boton ">
        <button onClick={() => eliminar(info.id)}>
          <i class="fa-solid fa-trash-can article_i  "></i>
          </button>
        <button onClick={() => {
          capturar(info.id)
          open()
        }}><i class="fa-solid fa-pencil article_e"></i></button>
      </div>
      </ul>
      
    </article>
        
  
  )

}


export default CardsCrud