import Hero from './Hero';
import '../App.css';

const Home = () => {
    return (
      <>
        <Hero text="Welcome to my Movie Browser..." />
        <div className="home-container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="home-lead">
              Make them laugh, make them cry, and hack to laughter. What do people go to the theatre for? An emotional exercise. I am a servant of the people. I have never forgotten that.<br /><br />
              -Mary Pickford
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Home;