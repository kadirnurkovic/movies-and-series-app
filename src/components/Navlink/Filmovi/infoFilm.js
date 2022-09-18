import { useLocation, useParams } from 'react-router-dom'

export default function Info(){
    const { id } = useParams()
    const { state } = useLocation()
    const movies = state.id
    const title = state.title
    const description = state.desctiption
    const image = state.image
    return(
        <div>
            <div>{movies}</div>
            <div>{title}</div>
            <div>{description}</div>
            <img src={image}></img>
        </div>
    )
}