import { useLocation, useParams } from 'react-router-dom'
import { Card } from '@mui/material'
import { CardActionArea, CardMedia, Typography, CardContent } from '@mui/material'

export default function Info(){
    const { id } = useParams()
    const { state } = useLocation()
    const series = state.id
    const title = state.title
    const description = state.description
    const image = state.image
    return(
        <div className='card-page'>
        <Card 
             sx={{
             minWidth: 340,
             maxWidth: 340,
             mt: 3,
             maxHeight: "700px",
             backgroundColor: "#004400",
             color: "#ffffff",
        }}
               >
                 <CardActionArea>
                   <CardMedia
                     component="img"
                     height="400"
                     image={image}
                     alt={title}
                   />
                   <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                       {title}
                     </Typography>
                     <Typography variant="body2" color="white">
                       {description}
                     </Typography>
                   </CardContent>
                 </CardActionArea>
               </Card>
               </div>
    )
}