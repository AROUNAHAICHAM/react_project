import Navbar from './components/navBar';
import Footer from './components/footer';
import CategoryJobs from './components/categoryJobs';
import OtherJobsGrid from './components/otherJob';
import './App.css';
import React from 'react';
const App: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='div2'>
        <div className='div1'>
          <h1>Discover <br/> more than <br /> <span className='text-primary'>5000+ jobs</span></h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus  </p>
         
         <div className='bg-light searchJob'>
          <form className="d-flex">
              <div className="col-auto me-2">
                <select className="form-select" aria-label="Default select example">
                  <option selected>country</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-auto me-2">
                <input type="search" className="form-control" id="search" placeholder="Job tile or keyword" />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Search my jod</button>
              </div>

            </form>
         </div>
        </div>
      </div>

      <div className='partenaire'>

      </div>

      <CategoryJobs></CategoryJobs>

      <div className='otherGrid1'>
        <div className='presentation2'>

        </div>
      </div>

      <OtherJobsGrid></OtherJobsGrid>
      <Footer></Footer>
    </>
  );
};

export default App;