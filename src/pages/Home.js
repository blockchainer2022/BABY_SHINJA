import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  Banner,
  Mission,
  Platforms,
  Metaverse,
  Tokenomics,
  Tax,
  Roadmap,
  Team,
  Community,
} from "../sections";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Mission />
      <Platforms />
      <Metaverse />
      <Tokenomics />
      <Tax />
      <Roadmap />
      <Team />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
