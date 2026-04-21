import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL = 
    "https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const HOT_URL = 
    "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD95uCJmBIrWzvqYSoG5v1bb0gbaUXof4RN8xWop_qg=";

    const COLD_URL = 
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENPTEQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const RAIN_URL = 
    "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJBSU4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";



    return (
        <div className="InfoBox">
           <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 
                        ? RAIN_URL
                        : info.temp > 15 
                        ? HOT_URL 
                        : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} &nbsp;
                        { info.humidity > 80 
                        ? < ThunderstormIcon />
                        : info.temp > 15 
                        ? < SunnyIcon /> 
                        : < AcUnitIcon /> 
                        }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                       <p> Temperature = {info.temp}&deg;C</p>
                       <p> Humidity = {info.humidity}</p>
                       <p> Min Temp = {info.tempMin}&deg;C</p>
                       <p> Max Temp = {info.tempMax}&deg;C</p>
                       <p> The weather can be described as <i> {info.weather} </i> & feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
           </div>
        </div>
    );
}