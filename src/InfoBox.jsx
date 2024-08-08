import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9nfGVufDB8fDB8fHww";

  const COLD_URL =
    "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9nfGVufDB8fDB8fHww";
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

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
                ? COLD_URL
                : HOT_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <AcUnitIcon />
              ) : (
                <WbSunnyIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temperature = {info.temp}&deg;C</div>
              <div>Humidity = {info.humidity}</div>
              <div>Min Temperature = {info.tempMin}&deg;C</div>
              <div>Max Temperature = {info.tempMax}&deg;C</div>
              <div>
                The Weather can be described as <i>{info.weather}</i> and feels
                like {info.feelslike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
