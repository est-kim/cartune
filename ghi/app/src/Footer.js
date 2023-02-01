import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <MDBContainer className='text-center text-md-start mt-1'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="car-side" className="me-3" />
                CarTune
              </h6>
              <p>
                Tune in to your next favorite car where we service and sell premium automobiles.
              </p>
              <div>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f" />
                </a>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter" />
                </a>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="google" />
                </a>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="instagram" />
                </a>
                <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                </a>
        </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>employees</h6>
              <p>
                <Link to="/salespersons/new" className='text-reset'>
                    New Sales Person
                </Link>
              </p>
              <p>
                <Link to="/technicians/new" className='text-reset'>
                    New Technician
                </Link>
              </p>
              <p>
                <Link to="/appointments/history" className='text-reset'>
                    Service Appointment History
                </Link>
              </p>
              <p>
                <Link to="/salespersons/sales" className='text-reset'>
                    Sales Person History
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>services</h6>
              <p>
                <Link to="/customers/new" className='text-reset'>
                    New Customer
                </Link>
              </p>
              <p>
                <Link to="/appointments/new" className='text-reset'>
                    New Appointment
                </Link>
              </p>
              <p>
                <Link to="/sales/new" className='text-reset'>
                    New Sales Record
                </Link>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact us</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                999 Revved Up Rd
                <br></br>
                Newport Beach, CA 92660
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@cartune.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 1 (123) 456-7890
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 1 (123) 456-7891
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#f0eeeb' }}>
        © 2023 Copyright:
          CarTune

      </div>
    </MDBFooter>
  );
}

export default Footer;
