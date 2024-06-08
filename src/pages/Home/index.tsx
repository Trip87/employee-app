import React from "react";
import "./index.scss";
import Button from "../../components/Button/Button";

const Home = () => {
  return <Button variant={'danger'} label={"zapisz"} height="large" onClick={()=>{console.log("klik")}} disabled={true} />
};

export default Home;
