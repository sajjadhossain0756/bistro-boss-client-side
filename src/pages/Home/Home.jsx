import Banner from "./Banner"
import Category from "./Category"
import Feature from "./feature/Feature"
import PopularMenu from "./PopularMenu"
import Testemonial from "./testemonial/Testemonial"


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Feature></Feature>
      <Testemonial></Testemonial>
    </div>
  )
}

export default Home