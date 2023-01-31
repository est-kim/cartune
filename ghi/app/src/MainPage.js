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
              <h1 className='mb-3'><img src="./cartune_transparent.png" alt="CarTune logo"/></h1>
              <h4 className='mb-3'>Tune in to your next car.</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      {/* </div> */}
    </header>
  );
}

export default MainPage;
