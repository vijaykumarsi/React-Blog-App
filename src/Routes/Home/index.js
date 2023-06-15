import React from "react";
import { Logo, TopNavigation , LogoMobile, Footer} from "../../Components";
import Banner from "./Banner";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";
import Store from "../../ContextStore/contextAPI";
import "../../App.css";
import TopPots from "./TopPots";

const Home = () => {
  //  const [state] = useContext(AppData)
  // console.log(state);

  return (
    <>
    <div className='LMobile' ><LogoMobile/></div>
    <div className='LLocal' ><Logo/>
      <TopNavigation/></div>
      <Store>
        <Banner />
        <Latest />
        <div className="mainContainer">
          <div className="subContainer">
            <div className="homeContainer">
              <LatestArticle />

              <TopPots />
            </div>
          </div>
        </div>
      </Store>
      <Footer/>
    </>
  );
};

export default Home;