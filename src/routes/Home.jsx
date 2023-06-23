import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
    return(
        <>
            <Navbar/>
            <Hero 
                cName='hero' 
                heroImage='../../src/assets/bgHome.jpg' 
                title='Your Journey, Your Story' 
                text='Choose Your Favourite Destination.'
                buttonText='Travel Plan'
                url='/'
                btnClass='show'
            />

            <section>
                <h2>Siguiente seccion</h2>
            </section>
        </>
    )
}

export default Home;