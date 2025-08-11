import React from 'react';
import Slider from "react-slick";
import Contact from './Contact';
import './pages.css';
import { useNavigate } from 'react-router-dom';

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Subscriptions() {
  const navigate = useNavigate();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "85px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  };
  

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow next-arrow"
        onClick={onClick}
      >
        &gt;
      </div>
    );
  }

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow prev-arrow"
        onClick={onClick}
      >
        &lt;
      </div>
    );
  }

  const handleSubscribeClick = () => {
    navigate('/SignUp'); 
  };

  return (
    <div>
      <div className="subscription-background">
        <h1 className="title">Subscription Plans</h1>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="subscription-card">
              <h3>Basic Plan</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 10 books per month.
              </p>
              <p><strong>$5/month</strong></p>
              <button className="choose-plan-button" onClick={handleSubscribeClick}>Subscribe</button>
            </div>
            <div className="subscription-card">
              <h3>Standard Plan</h3>
              <p>
                Praesent sapien massa, convallis a pellentesque nec. 50 books per month.
              </p>
              <p><strong>$15/month</strong></p>
              <button className="choose-plan-button" onClick={handleSubscribeClick}>Subscribe</button>
            </div>
            <div className="subscription-card">
              <h3>Premium Plan</h3>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Unlimited books.
              </p>
              <p><strong>$30/month</strong></p>
              <button className="choose-plan-button" onClick={handleSubscribeClick}>Subscribe</button>
            </div>
            <div className="subscription-card">
              <h3>Family Plan</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Share with up to 4 family members.
              </p>
              <p><strong>$40/month</strong></p>
              <button className="choose-plan-button" onClick={handleSubscribeClick}>Subscribe</button>
            </div>
            <div className="subscription-card">
              <h3>Lifetime Plan</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus. Unlimited books forever.
              </p>
              <p><strong>$200 one-time</strong></p>
              <button className="choose-plan-button" onClick={handleSubscribeClick}>Subscribe</button>
            </div>
          </Slider>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Subscriptions;
