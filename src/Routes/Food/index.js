import React from 'react'
import { Logo, TopNavigation , LogoMobile, Footer} from '../../Components'
import FoodArticleList from './FoodArticleList'
import FoodTopPost from './FoodTopPost'
import Store from '../../ContextStore/contextAPI'

const Food = () => {
  return (
    <>
   <div className='LMobile' ><LogoMobile/></div>
    <div className='LLocal' ><Logo/>
      <TopNavigation/></div>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
            <Store>
    <FoodArticleList/>
    <FoodTopPost/>
    </Store>
    </div>
    </div>
    </div>
    <Footer/>
      
    </>
  )
}

export default Food