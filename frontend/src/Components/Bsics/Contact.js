import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>

     
       

 


<div className="container-fluid  contact22" >
    
<h1  className="contact">CONTACT US   </h1>
    
<br></br>
  <br></br>
  <br></br>
  <br></br>
    <div className="row g">
  
  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-5   divi" > 
   

  <div className="backimg22">
     
  </div>
  

  </div>



  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-5" > 

      <form>
        <label >Name</label><br></br>
        <input type="text" placeholder='enter your name' className="form-control"></input><br></br>
        <br></br>
        <label>Email</label><br></br>
        <input type="email" placeholder='enter your email' className="form-control"></input><br></br>
        <br></br>
        

        <label>How did you find us</label><br></br>

        <select className="form-control">
            <option value="friends">friends</option>
            <option value="search">earch</option>
            <option value="advertisment">advertisment</option>
            <option value="other">other</option>
        </select><br></br>
        <br></br>

        <label>Drop us a line</label><br></br>
        <input type="textarea" className="form-control  feedback"   placeholder="your Message"></input><br></br>
        <br></br>

        <div className='text-center'>

        <button type="button" className="btn btn-primary btn-lg  book">Send</button> 
        </div>
      </form>
  </div>

  </div>
  </div> 


    
    
    </>
  )
}

export default Contact