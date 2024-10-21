import Biography from "../components/Biography"
import Departments from "../components/Departments"
import Hero from "../components/Hero"
import MessageForm from "../components/MessageForm"


const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Usman Bhullar Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
     <Biography imageUrl={"/about.png"} />
      <Departments/>
      <MessageForm/>
    </>
  )
}

export default Home
