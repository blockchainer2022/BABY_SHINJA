import "./style.css";
import Title from "../../components/title";
import Image from "../../assets/images/metaverse.png";
const Metaverse = () => {
  return (
    <div className="py-20 mission">
      <div className="container">
        <div>
          <Title title="The INU Metaverse" backtext="METAVERSE" />
          <p className="text-center mt-6 text-sm md:mx-20">
            CAPTAIN INU STRIVES TO CREATE A METAVERSE WORLD FOR ITS INU ARMY,
            BRINGING THE COMMUNITY TOGETHER IN ONE ENGAGING AND IMMERSIVE
            ECOSYSTEM
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 gap-4 items-center mt-16">
          <div>
            <img src={Image} alt="" className="mx-auto max-w-sm w-full " />
          </div>
          <div className="text-center lg:text-left max-w-xl lg:max-w-auto mx-auto lg:mx-0 w-full lg:w-auto">
            <p className="text-sm capitalize font-normal mt-6 text-dark-300">
              Bringing the community together in one engaging and immersive
              metaverse ecosystem, aka Captain Inuverse. A play to earn Inu
              gaming metaverse is currently being formed by the Captain Inu
              team, which has partnered up with a well-known gaming company that
              has nine years of gaming development experience.
            </p>
            <p className="text-sm capitalize font-normal mt-6 text-dark-300">
              One of our partners has even received a variety of international
              gaming awards! The team’s next gaming venture is Captain Inuverse,
              making Captain’s Inu story come to life. In Captain Inuverse,
              known Shiba Inu projects will be presented, uniting the whole Inu
              community.
            </p>
            <p className="text-sm capitalize font-normal mt-6 text-dark-300">
              People can role play with their favorite Inu character during the
              missions. Captain Inuverse will be an open-world fantasy game that
              gets built on the Ethereum blockchain.
            </p>
            {/* <button className=" bg-primary-500 text-dark-300 py-2 px-6 mt-8 rounded-md font-bold">
              READ MORE
            </button> */}
          </div>
        </div>
        <p className="text-sm capitalize  font-normal mt-10 text-dark-300">
          The game will be a merging environment through PVP battle gaming and
          an open-world exploration game. Captain Inuverse will be implementing
          on-chain interactions (ETH Network) and exclusive NFT in-game items to
          be collected by the players. The idea is to create virtual 3d
          galleries, displaying Captain Inu NFT’s. These NFTs will be developed
          by various NFT artists, and the talent of the Captain Inu community.
        </p>
      </div>
    </div>
  );
};

export default Metaverse;
