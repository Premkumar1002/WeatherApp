import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1445294211564-3ca59d999abd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJlZXxlbnwwfHwwfHx8MA%3D%3D";

  const HOT_URL ="https://media.istockphoto.com/id/694036462/photo/tree-foliage-in-morning-light.jpg?s=2048x2048&w=is&k=20&c=Ff0IYxvxzgzyul_xBhSKUmLZiwIm-DlKmyhsMekzTgA=";
  const COLD_URL ="https://plus.unsplash.com/premium_photo-1671031978099-bd8f45810da7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9yZXN0JTIwd2ludGVyfGVufDB8fDB8fHww";
  const RAINY_URL ="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={info.humidity > 80 ? RAINY_URL: info.temp > 15 ? HOT_URL: COLD_URL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80 ? <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/>: <AcUnitIcon/>}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can de described as <i>{info.weather}</i> and feels
                like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
