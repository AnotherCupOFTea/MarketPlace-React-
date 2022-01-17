import React, { useEffect } from "react";
import { ClientContext } from "../context/ClientProvider";
import { Container, Grid } from "@mui/material";
import Like from "../components/Like";
import EmptyBox from '../images/pngegg (28).png'

const LikePage = () => {
  const { getLike, like } = React.useContext(ClientContext);

  useEffect(() => {
    getLike();
  },[]);

  // console.log(like);

  if (!like) {
    return <h2>Loading...</h2>;
  }

  if (like.products.length === 0) {
    return <div className="emty">
    <img width={400} src={EmptyBox} alt="" />
    <h2>Your favorite is empty.</h2>
    </div>;
  }

  return (
    <div>
      <Container className="cont">
      <h2>Favorite</h2>
      <Grid container spacing={4}>
              <Grid key={like.id} item xs={12} sm={6} md={3}>
                <div >
                <Like like={like} />
                </div>
              </Grid>
      </Grid> 
      </Container>
    </div>
  );
};

export default LikePage;
