import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import Img from '../../../Assets/prof.jpg'
  import './landcard.css'
   
  export default function LandCard() {
    return (
        <div className="costume-card" style={{backgroundImage:`url(${Img})`}}>
            <span> Books Title</span>
        </div>
    );
  }