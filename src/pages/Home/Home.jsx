import Banner from "./Banner"
import Category from "./Category"
import Feature from "./feature/Feature"
import PopularMenu from "./PopularMenu"


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Feature></Feature>
    </div>
  )
}

export default Home