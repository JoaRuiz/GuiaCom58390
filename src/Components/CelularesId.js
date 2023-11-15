import { useParams } from "react-router-dom"

const CelularesId = () => {
   
    const {id, name} = useParams();

  return (
    <div>
      <h2>Este producto tiene el id: {id} el dinamico</h2>
      <h2>Este producto tiene la marca: {name} el dinamico</h2>
    </div>
  )
}

export default CelularesId
