function App() {
  return (
    <div className="App">
      <form>
        <h1 class="my-5">Sign Up</h1>
        <div class="row">
          <div class="col-sm-7">
            <label>
              <p class="label-txt">
                {" "}
                <i class="bi bi-person-fill me-3"></i>Enter Name
              </p>
              <input type="text" class="input" required/>
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>

            <label>
              <p class="label-txt">
                <i class="bi bi-envelope-fill me-3"></i>Your Email
              </p>
              <input type="text" class="input" required />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>

            <label>
              <p class="label-txt">
                <i class="bi bi-person-fill-lock me-3"></i>Password
              </p>
              <input type="text" class="input" required/>
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>

            <label>
              <p class="label-txt">
                <i class="bi bi-person-lock me-2"></i>Repeat Your Password
              </p>
              <input type="text" class="input" required />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>

            <p class="my-5">
              <input class="m-2" type="checkbox" name="ccheck" id="" />I agree
              all statements in <a href="app.js">Terms of service</a>
            </p>
          </div>
          <div class="col-md-5 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
            <img
              className="ms-4"
              src="/image/offices.png"
              style={{ width: "300px" }}
              class="nkita"
              alt="Sample"
            />
          </div>
        </div>
        <div class="row my-5">
          <div class="col-6">
            <button class="bg-primary text-white" type="submit">
              Register
            </button>
          </div>
          <div class="col-6">
            {" "}
            <p>
              {" "}
              <a href="app.js">I am already a member</a>
            </p>{" "}
          </div>
        </div>
      </form>



      <form>
      <h1 class="my-5">Sign Up</h1>
      <div className="row">
      <div class="col-md-6 col-lg-6 ">
            <img
              className="me-5"
              src="/image/offices.png"
              style={{ width: "280px" }}
              class="nkita"
              alt="Sample"
            />
          </div>
          <div className="col-6" ms-5>
          <label>
              <p class="label-txt">
                {" "}
                <i class="bi bi-person-fill me-3"></i>Your Name
              </p>
              <input type="text" class="input" required/>
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>

            <label>
              <p class="label-txt my-3">
                <i class="bi bi-person-lock my-2"></i> Password
              </p>
              <input type="text" class="input my-2" required />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>

            
             <div className="me-5"> <input className="ms-2" type="checkbox" name="ccheck" id="" />Remember Me</div>
             

             <div class="col-6"><button class="bg-primary text-white my-5" type="submit">Login</button></div>
      
            
            </div>
            
            <div className="row my-5"> 
        <div className="col-6" > <p> <a href="app.js">Create an account</a></p> </div>
 <div className="col-sm-6">
  or login with


 <button type="button" class="btn btn-primary btn-sm m-1 "><i className=" bi bi-facebook text-white"></i></button>
 <button type="button" class="btn btn-info btn-sm m-1"><i className="bi bi-twitter text-white  "></i></button>
 <button type="button" class="btn btn-danger btn-sm"><i className="bi bi-google text-white "></i></button>
 
 
 

       </div>
       </div>
</div>
      </form>
    </div>
  );
}

export default App;
