import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({info}){
    const Img_url ="https://plus.unsplash.com/premium_photo-1675827055668-2dae1b8ac181?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const Hot_url="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Cold_url="https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_url ="https://images.unsplash.com/photo-1663615280811-2bfd622552ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlciUyMHJhaW58ZW58MHx8MHx8fDA%3D";
   
    return (
        <div className="InfoBox">
           <div className="card">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity >50
            ? rain_url
            :info.temp>15
            ? Hot_url
            :Cold_url 
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}{
            info.humidity >50
            ? < ThunderstormIcon/>
            :info.temp>15
            ? <SunnyIcon />
            : <AcUnitIcon/>
        }        </Typography>
        <Typography variant="body2"  color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;c</p>
             <p>Humidity = {info.humidity}</p>
             <p>Min Temp={info.tempMin}</p>
             <p>Max Temp={info.tempMax}</p>
               <p>the weather can be described as ${info.weather} and feels like ={info.feels_like}&deg;c</p>


        </Typography>
      </CardContent>
      
       
      
    </Card>
    </div>
        </div>
    );
};