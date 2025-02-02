import { Helmet } from "react-helmet-async"
import Banner from "./Banner"
import Category from "./Category"
import Feature from "./feature/Feature"
import PopularMenu from "./PopularMenu"
import Recommend from "./Recommend"
import Testemonial from "./testemonial/Testemonial"


const Home = () => {
  return (
    <div>
      <Helmet>
         <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Recommend></Recommend>
      <Feature></Feature>
      <Testemonial></Testemonial>
    </div>
  )
}

export default Home