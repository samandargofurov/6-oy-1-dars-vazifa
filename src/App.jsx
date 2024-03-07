import './App.css'
import rightHero from "./assets/right-hero.png";
import comment from "./assets/comment.png";
import image from "./assets/IMAGE.png";
import image1 from "./assets/IMAGE-1.png";
import image2 from "./assets/IMAGE-2.png";
import image3 from "./assets/IMAGE-3.png";
import image4 from "./assets/IMAGE-4.png";
import image5 from "./assets/IMAGE-5.png";

function App() {

  return (
    <>
    <div className="container">

      <header>
        <div className="logo"><a href="#">GRECCE</a></div>

        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">Use cases</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">About us</a></li>
        </ul>

        <div className="register">
          <a href="#">Log in</a>
          <button>Request a demo</button>
        </div>
      </header>

      <div className="hero">

        <div className="text-left">
          <div className="title">Next generation</div>
          <div className="desc">Welcome to the next generation of mobile commerce and customer engagement. Meet your mobile customers where they want to be met.</div>
          <img src={comment} alt="comment photo" />
        </div>

        <div className="img-right">
          <img src={rightHero} alt="logo photo" />
        </div>

      </div>

      <div className="brand">

        <h2>Used by industry leaders</h2>

        <div className="brand-logo">
          <img src={image} alt="logo brand" />
          <img src={image1} alt="logo brand" />
          <img src={image2} alt="logo brand" />
          <img src={image3} alt="logo brand" />
          <img src={image4} alt="logo brand" />
          <img src={image5} alt="logo brand" />
        </div>

      </div>

      <main>
        <h1>Make mobile journeys easier, faster and frictionless for your clients</h1>
        <div className="cards">
          <div className="card1">
            <img src={rightHero} alt="" />
            <h3>Easy to use</h3>
            <br />
            <div className="desc">A complete set of tools to enable marketing teams to easily curate, personalize, contextualize, send, integrate and track campaigns - no coding required. <br /> Our software design philosophy is all about the mobile end user, in particular their preference to Tap not Type.</div>
          </div>
          <div className="card1 card2">
            <img src={rightHero} alt="" />
            <h3>Revenue driving</h3>
            <br />
            <div className="desc">Companies in the USA are claiming over 18.5% of online revenue is being generated from mobile commerce initiatives. With 100% views, 90% plus open rates and CTR's like the very early days of email, you can be confident your mobile marketing is being seen and your efforts aren’t going to waste.</div>
          </div>
          <div className="card1 card3">
            <img src={rightHero} alt="" />
            <h3>Integrated with your <br /> stack</h3>
            <br />
            <div className="desc">You don't want to be shifting data from platform to platform. intouch has complete set of API’s and Webhooks to enable integration with existing marketing stacks - as well as deep integration with a limited number of marketing platforms.</div>
          </div>
        </div>
      </main>

    </div>
    </>
  )
}

export default App
