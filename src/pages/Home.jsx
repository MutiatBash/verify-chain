import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Purple from "../sections/Purple";
import Steps from "../sections/Steps";
import { Companies } from "../components/Companies";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Companies />
      <Features />
      <Purple
        heading={"About The Project"}
        body={`At Verify Chain, we're on a mission to revolutionize the web3 
        space by addressing a critical challenge--ensuring the trust and security 
        of smart contracts in a decentralized world.`}
        
      />
      <Steps/>
      <Purple
        heading={"Our Solution"}
        body={`Verify Chain is the answer to this challenge, we have developed a 
        cutting edge system that empowers users to validate contract identities with ease. 
        Through smart contract vulnerability scanning, real-time threat detection, and driven 
        verification, we're enhancing security and transparency in the web3 ecosystem
    `}
        
      />
    </div>
  );
};
export default Home;
