import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

const reviews = [
  {
    id: 1,
    name: "Robin Frost",
    img:
      "https://www.yourtango.com/sites/default/files/styles/header_slider/public/image_blog/7-year-cycle.jpg?itok=AxoJqMrp",
    text:
    `I recently had the pleasure of purchasing a new car from this dealership and I
    couldn't be happier with my experience! The CarTune sales team was knowledgeable,
    friendly,and went above and beyond to ensure I got the car of my dreams at a great
    price. The financing process was smooth and stress-free, and I appreciated the transparency
    throughout the entire process. I highly recommend this dealership to anyone in the market
    for a new vehicle. The professional staff and quality care for me and my car has made me
    a lifelong customer. Thank you for making my car buying experience a positive one!`,
  },
  {
    id: 2,
    name: "Kennedy Cassiday",
    img:
      "./KCassiday.png",
    text:
      `I recently had the pleasure of working with CarTune for my car repair needs, and I must say,
      I was thoroughly impressed! From the moment I walked into their shop, the staff were incredibly
      professional and accommodating. They took the time to explain the issues with my car and provided
      me with a comprehensive estimate for the repairs.

      The team at CarTune did an outstanding job fixing my car, and I was pleasantly surprised at how
      quickly the work was completed. The vehicle was returned to me in excellent condition, running
      smoothly and efficiently. The team took all the necessary precautions to ensure that my car was
      returned to me in the best possible condition.

      Overall, my experience with CarTune was amazing, and I would highly recommend this car service
      company to anyone looking for a reliable and top-notch automotive repair experience. Whether you
      need routine maintenance, a major repair, or anything in between, CarTune is the perfect solution
      for all your automotive needs. Trust them with your vehicle today, and experience the difference
      for yourself!`,
  },
  {
    id: 3,
    name: "Ching Cheng",
    img:
      "./ChingCheng.png",
    text:
      `I recently had the privilege of taking my car to CarTune for some repairs, and I was blown away by
      the quality of service I received. The technicians were knowledgeable, friendly and took the time to
      explain the issues with my car and what needed to be done to fix them. They went above and beyond to
      ensure my car was running smoothly and safely, and I appreciated their honesty and transparency
      throughout the entire process.

      The pricing was fair, and I felt confident that I was getting a great value for my money. The team at
      CarTune took care of my car as if it was their own, and I was impressed by the attention to detail and
      quality of workmanship. I also appreciated the quick turnaround time, as I was able to have my car back
      on the road in no time.

      I highly recommend CarTune to anyone in need of car repairs. The professional staff and exceptional
      care for both me and my car has earned them a lifelong customer. Thank you, CarTune, for making my
      car repair experience a positive one!`,
  },
  {
    id: 4,
    name: "Anthony Pham",
    img:
      "./AnthonyPham.jpeg",
    text:
      `Recently, I had the pleasure of visiting CarTune for the purpose of purchasing a new vehicle. From start
      to finish, the experience was nothing short of exceptional.

      Upon arrival, I was greeted by a friendly sales representative who was eager to assist me in finding the
      perfect car for my needs. The sales representative took the time to listen to my requirements, understand
      my budget, and show me a variety of options that met my criteria. He was knowledgeable, professional, and
      patient, and I never felt pressured to make a decision.

      I am extremely satisfied with my experience at CarTune, and I would highly recommend them to anyone in
      the market for a new vehicle. The combination of their vast selection, knowledgeable staff, and exceptional
      customer service made for a truly positive buying experience. Thank you CarTune for helping me find the
      car of my dreams!`,
  },
];

function MainPage() {
  const [currentItem, setCurrentItem] = useState(0);
  const [item, setItem] = useState(reviews[0]);

  useEffect(() => {
    setItem(reviews[currentItem]);
  }, [currentItem]);

  const showNextPerson = () => {
    setCurrentItem(currentItem + 1);
    if (currentItem === reviews.length - 1) {
      setCurrentItem(0);
    }
  };

  const showPrevPerson = () => {
    setCurrentItem(currentItem - 1);
    if (currentItem === 0) {
      setCurrentItem(reviews.length - 1);
    }
  };

  return (
    <header className="main-page" style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.75)),url('https://wallpaperaccess.com/full/1670957.jpg')`,
          height: 750,
          backgroundPosition: "30% 70%",
          backgroundSize: "cover"
        }}
      >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-black'>
              <h1 className='mb-3'><img src="./cartune_logo.png" alt="CarTune Logo"/></h1>
              <h4 className='mb-3'><img src="./solid_slogan.png" alt="CarTune Slogan" width="400px" className="wave"/></h4>
              <a className='book-appointment-button btn btn-outline-light' href='/appointments/new' role='button'>
                Book Appointment
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <br></br>
          <p className="fs-2 fw-bold text-center">Welcome to CarTune</p>
          <p className="text-center">
            At CarTune, we're revolutionizing the car dealership and service experience with our one-stop shop.
            Whether you're in the market for a new set of wheels or need to keep your current ride running smoothly,
            we've got you covered. With a wide selection of quality vehicles and expert technicians on hand, you can
            be confident that your car will be in tip-top shape. Our team is dedicated to making car ownership a breeze,
            so you can hit the road with confidence. Come visit CarTune today and take the fast lane to car
            happiness with the best in sales and service, all in one convenient location!
          </p>
          <br></br>
        </div>
        <div className="container-2">
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            <MDBCol>
              <MDBCard className="card">
              <MDBCarousel showControls fade>
                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={1}
                  src='https://www.cyberleadinc.com/wp-content/uploads/2019/01/Auto-Salesman-Training.jpeg'
                  alt='...'
                />
                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={2}
                  src='https://www.thebalancemoney.com/thmb/IPHh3p7BKzF2xQqRmdESQTs2Mzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/car-saleswoman-showing-to-male-customer-car-performance-on-tablet-1284963732-dd46e48a4c31401984bb33457aaea313.jpg'
                  alt='...'
                />
                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={3}
                  src='https://images.unsplash.com/photo-1560250084-db7634c63f8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80'
                  alt='...'
                />
              </MDBCarousel>
                <MDBCardBody>
                  <MDBCardTitle>Sales</MDBCardTitle>
                  <MDBCardText>
                    Meet our experienced and friendly car sales team, dedicated to making your car-buying experience a success.
                    With a passion for automobiles and a commitment to customer satisfaction, our team will work with you every
                    step of the way to find the perfect car for your needs and budget. Whether you're in the market for a new or
                    pre-owned vehicle, our sales team has the expertise to help you tune in to the right choice.
                  </MDBCardText>
                  <Link to="/salespersons">
                    <button className="orange-link-btn">Meet Our Sales Team</button>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="card">
                  <MDBCarousel showControls fade>
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={1}
                      src='https://images.unsplash.com/photo-1592853625601-bb9d23da12fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={2}
                      src='https://images.unsplash.com/photo-1625773049545-fb23fc4f4538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={3}
                      src='https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                      alt='...'
                    />
                  </MDBCarousel>
                <MDBCardBody>
                  <MDBCardTitle>Inventory</MDBCardTitle>
                  <MDBCardText>
                    Discover our unbeatable selection of high-quality cars, trucks, SUVs, and more, all tuned up and
                    ready to hit the road. Our inventory is constantly being updated with the latest makes and models
                    to meet your needs and exceed your expectations. Don't see exactly what you're looking for? Let us
                    know and our team will work to source it for you, ensuring you get behind the wheel of the perfect
                    vehicle in no time.
                  </MDBCardText>
                  <Link to="/models">
                    <button className="orange-link-btn">See Our Vehicles</button>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="card">
                  <MDBCarousel showControls fade>
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={1}
                      src='https://images.unsplash.com/photo-1632823471565-1ecf94f8799a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={2}
                      src='https://images.unsplash.com/photo-1652987086612-d948b775d358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={3}
                      src='https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                      alt='...'
                    />
                  </MDBCarousel>
                <MDBCardBody>
                  <MDBCardTitle>Services</MDBCardTitle>
                  <MDBCardText>
                    Keep your vehicle in top condition with our comprehensive car service. Our experienced technicians
                    use the latest technology and equipment to tune up your ride and keep it running smoothly. From routine
                    maintenance to complex repairs, we've got you covered. With our transparent pricing and exceptional customer
                    service, you'll never have to worry about being taken for a ride. Satisfaction guaranteed.
                  </MDBCardText>
                  <Link to="/technicians">
                    <button className="orange-link-btn">Meet Our Technicians</button>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
        <br></br>

        <section className="container">
        <div className="title">
          <p className="fs-2 fw-bold text-center">Our Team</p>
          <div className="underline"></div>
        </div>
          <MDBRow>
            <MDBCol>
              <article className="review">
              <div className='img-container'>
                <img src="./EstherKim.png" id="person-img" alt="" />
              </div>
              <h4 id="author" className='fs-6'>Esther Kim</h4>
              <p>Founder / Head of Sales</p>
              <p id="info">
                Hi, I'm Esther, the founder and head of car sales here at CarTune. I'm proud to say that my team and I have built a reputation
                for exceptional service and expertise in the automotive industry. With 20 years of experience under my belt, I bring a wealth
                of knowledge and a deep passion for all things automotive to the table. Whether you're in the market for a luxury sports car or a family-friendly SUV, my team
                and I will work tirelessly to find the perfect vehicle to meet your needs and exceed your expectations. We believe that buying
                a car should be an enjoyable and stress-free process, and we're here to make that a reality for you. We go the extra mile to ensure
                that every customer leaves our dealership completely satisfied. In addition, we offer competitive financing options and a wide range
                of after-sales services to ensure that your relationship with CarTune extends far beyond the initial sale. So why not come and visit
                us today? Experience the difference that comes from working with the best in the business and see for yourself why CarTune is
                the go-to destination for discerning car buyers. I look forward to meeting you soon!
              </p>
              </article>
            </MDBCol>
            <MDBCol>
            <article className="review">
              <div className='img-container'>
                <img src="./JasonDai.png" id="person-img" alt="" />
              </div>
              <h4 id="author" className='fs-6'>Jason Dai</h4>
              <p>Founder / Head of Sales</p>
              <p id="info">
              Hi, I'm Jason, the founder and head of car services at Jason. I have a passion for all things automotive and a commitment to
              providing the highest quality service to our customers. With 20 of experience in the industry, I bring a wealth of knowledge
              and expertise to every project we undertake. At CarTune, we believe that car maintenance and repairs should be straightforward
              and stress-free. That's why we offer a wide range of services, from routine maintenance to complex repairs, all performed by our
              team of skilled technicians.
              Our state-of-the-art facilities, cutting-edge tools, and genuine commitment to customer satisfaction
              make us the go-to destination for car owners across California. Whether you're looking for a routine oil change, a complete engine
              overhaul, or anything in between, I and my team are here to help. We'll take the time to understand your needs, provide you with
              a transparent estimate, and work diligently to get you back on the road as quickly as possible. I'm confident you'll be impressed
              by our commitment to quality and customer service, and I look forward to working with you soon.

              </p>
            </article>
            </MDBCol>
          </MDBRow>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <section className="container">
        {/* <!-- title --> */}
        <div className="title">
          <p className="fs-2 fw-bold text-center">Our Reviews</p>
          <div className="underline"></div>
        </div>
        {/* <!-- review --> */}
        <article className="review">
          <div className="img-container">
            <img src={item.img} id="person-img" alt="" />
          </div>
          <h4 id="author">{item.name}</h4>
          <p>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </p>

          <p id="info">{item.text}</p>
          {/* <!-- prev next buttons--> */}
          <div className="button-container">
            <button className="prev-btn" onClick={showPrevPerson}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-btn" onClick={showNextPerson}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          {/* <!-- sign up button --> */}
          <Link to="/customers/new">
            <button className="orange-link-btn">Sign Up</button>
          </Link>
        </article>
      </section>
      <br></br>
      <br></br>
      <br></br>
      {/* </div> */}
    </header>
  );
}

export default MainPage;
