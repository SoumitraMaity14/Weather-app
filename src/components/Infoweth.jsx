import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import './infoweth.css'
export default function Infoweth({info}){
    const IMG1="https://images.unsplash.com/photo-1723285408341-e6e39a360e0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
    const IMG2="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo="
    return(
        <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity<=50 ? IMG1:IMG2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temparture ={info.temp}&deg;C</p>
          <p>Humidity ={info.humidity}</p>
          <p>Pressure ={info.pressure}</p>
          <p>Max temp ={info.tempMax}&deg;C</p>
          <p>Min temp ={info.tempMin}&deg;C</p>
          <p>The weather can be describe as {info.weather} feels like {info.felsLike}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    )

}