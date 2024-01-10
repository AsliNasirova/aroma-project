import React from 'react'
import Shopfun from '../../Components/ShopFun/shopfun'
import Winter from '../../Components/WinterSale/winter'
import Best from '../../Components/BestSellers/best'
import Latest from '../../Components/Latest/latest'
import {Helmet} from 'react-helmet'

function Home() {
  return (
    <>
   <Helmet>
    <title>Home Page</title>
   </Helmet>
    <div>
      <Shopfun/>
      <Winter/>
      <Best/>
      <Latest/>
    </div>
    </>
  )
}

export default Home