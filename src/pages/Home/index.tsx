import Button from "../../components/Button";
import * as S from "../styles";

export default function Home() {
  //   import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

  // const getLocation = () =>{
  //    const pos = {};
  //    const geolocation = navigator.geolocation;
  //    if (geolocation) {
  //       geolocation.getCurrentPosition(findLocal, showEror);
  //    }
  //    function findLocal(position){
  //       pos.lat = position.coords.latitude;
  //       pos.lng = position.coords.longitude;
  //    }
  //    function showEror(){console.log(Error)}
  //    return pos;
  // };
  // const myLocation = getLocation();

  // const getPosition = () => {
  //   if (!("geolocation" in navigator)) {
  //     console.log("Not Available");

  //   } else {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     });
  //   }
  // };

  return (
    <S.Wrapper>
      <h1>Home</h1>
    </S.Wrapper>
  );
}
