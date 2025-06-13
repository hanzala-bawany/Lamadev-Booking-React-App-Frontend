import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import "./Home.css"

const Home = () => {
  return (
    <div id='homePage'>
      <NavBar />

      <Header />

      <div className="homeBody">
        <Featured />

        <h2 className="homeTitle">Browse By Property Type</h2>
        <PropertyList />

        <h2 className="homeTitle">Home Guest Love</h2>
        <FeaturedProperties />

        <MailList />

        <Footer /> 
      </div>

    </div>
  )
}

export default Home