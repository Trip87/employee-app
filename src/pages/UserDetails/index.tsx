import React from "react";
import Card from "../../components/Card/Card";
import Button from '../../components/Button';
import './index.scss';

const UserDetails = () => {

  const handleClick = () => {
    console.log("clicked");
  }
  return (
    <section>
      <Card className=''>
        <h2>User Details</h2>
        <p>FirstName LastName</p>
        <p>Zawód</p>
        <Button text="Zobacz więcej" onClick={handleClick} className="button-view" />
      </Card>
    </section>
  );
};

export default UserDetails;
