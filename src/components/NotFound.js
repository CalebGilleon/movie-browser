import Hero from './Hero';

const NotFound = () => {
    return (
      <>
        <Hero text="404" />
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <div className="sad-face-container">
                <div className="sad-face"></div>
              </div>
              <div className="not-found-message">Oops! The page you're looking for doesn't exist</div>
            </div>
          </div>
      </>
    );
  }

export default NotFound;