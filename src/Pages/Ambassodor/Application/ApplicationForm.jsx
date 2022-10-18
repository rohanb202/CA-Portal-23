import React from 'react';
import './ApplicationForm.css';
// import Sidebar from '../../../components/Sidebar';
import FormFrame from './SVG/FormFrame.png';
import NavBar from '../../../components/navbar/navbar';

function Ambassador() {
  return (
    <>
      <NavBar />
      <div className="flex flex-shrink-0 w-screen h-screen">
        <div className=" flex flex-col w-[100%] pl-[15%] pr-[5%]">
          <div className="form-frame">
          <img 
              src={FormFrame} 
              alt="Frame" />
          <div className="main-form">
            <div className="form">
              <h3>Campus Ambassador Application</h3>
              <form action="">
                <div className="element">
                  <label htmlFor="Name">Name:</label>
                  <input type="text" name='Name' />
                </div>
                <div className="element">
                  <label htmlFor="College">College:</label>
                  <input type="text" name='College' />
                </div>
                <div className="element">
                  <label htmlFor="Dob">DOB:</label>
                  <input type="date" name='Dob' />
                </div>
                <div className="element">
                  <label htmlFor="Mail">Mail ID:</label>
                  <input type="text" name='Mail' />
                </div>
                <div className="element">
                  <label htmlFor="Phone">Phone:</label>
                  <input type="text" name='Phone' />
                </div>
                <input type="submit" value="Apply" />
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ambassador