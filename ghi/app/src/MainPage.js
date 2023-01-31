import "./mainpage.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardImage,
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';


function MainPage() {
  // return (
  //   <div className="px-4 py-5 my-5 text-center">
  //     <h1 className="display-5 fw-bold">CarCar</h1>
  //     <div className="col-lg-6 mx-auto">
  //       <p className="lead mb-4">
  //         The premiere solution for automobile dealership
  //         management!
  //       </p>
  //     </div>
  //   </div>
  // );
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/1670957.jpg')",
          height: 550,
          backgroundPosition: "30% 70%"
          // backgroundRepeat: "no-repeat"
        }}
      >
        {/* <div
        className='mask'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}> */}
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-black'>
              <h1 className='mb-3'><img src="./cartune_transparent.png" alt="CarTune Logo"/></h1>
              <h4 className='mb-3'><img src="./cartune_slogan.png" alt="CarTune Slogan" width="400px"/></h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <br></br>
          <p class="fs-2 fw-bold text-center">Welcome to CarTune</p>
          <p class="text-center">Tune in to your next favorite car where we service and sell premium automobiles.</p>
          <br></br>
        </div>
        <div className="container-2">
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            <MDBCol>
              <MDBCard>
              <MDBCarousel showControls fade>
                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={1}
                  src='https://mdbootstrap.com/img/new/slides/041.jpg'
                  alt='...'
                />
                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={2}
                  src='https://mdbootstrap.com/img/new/slides/042.jpg'
                  alt='...'
                />
                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={3}
                  src='https://mdbootstrap.com/img/new/slides/043.jpg'
                  alt='...'
                />
              </MDBCarousel>
                <MDBCardBody>
                  <MDBCardTitle>Sales</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </MDBCardText>
                  <MDBBtn href='#'>Go somewhere</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                  <MDBCarousel showControls fade>
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={1}
                      src='https://mdbootstrap.com/img/new/slides/041.jpg'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={2}
                      src='https://mdbootstrap.com/img/new/slides/042.jpg'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={3}
                      src='https://mdbootstrap.com/img/new/slides/043.jpg'
                      alt='...'
                    />
                  </MDBCarousel>
                <MDBCardBody>
                  <MDBCardTitle>Services</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </MDBCardText>
                  <MDBBtn href='#'>Go somewhere</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                  <MDBCarousel showControls fade>
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={1}
                      src='https://mdbootstrap.com/img/new/slides/041.jpg'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={2}
                      src='https://mdbootstrap.com/img/new/slides/042.jpg'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={3}
                      src='https://mdbootstrap.com/img/new/slides/043.jpg'
                      alt='...'
                    />
                  </MDBCarousel>
                <MDBCardBody>
                  <MDBCardTitle>Services</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </MDBCardText>
                  <MDBBtn href='#'>Go somewhere</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
        <br></br>
        <section className="container">
        {/* <!-- title --> */}
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        {/* <!-- review --> */}
        <article className="review">
          <div className="img-container">
            <img src="https://www.yourtango.com/sites/default/files/styles/header_slider/public/image_blog/7-year-cycle.jpg?itok=AxoJqMrp" id="person-img" alt="" />
          </div>
          <h4 id="author">Robin Frost</h4>
          <p id="job">Reporter</p>
          <p id="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            asperiores debitis incidunt, eius earum ipsam cupiditate libero?
            Iste, doloremque nihil?
          </p>
          {/* <!-- prev next buttons--> */}
          <div className="button-container">
            <button className="prev-btn">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          {/* <!-- random button --> */}
          <button className="random-btn">Sign Up</button>
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
