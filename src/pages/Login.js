import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as imgLogin from '../assets/images/ImgLib'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let [showPassword, setShowPassword] = useState(true)
  return (
    <>
    <div className="authentication-bg position-relative">
        <div className='position-absolute start-0 end-0 start-0 bottom-0 w-100 h-100'></div>
        <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-4 col-lg-5">
                        <div className="card">
                            <div className="card-header py-2 text-center bg-primary">
                                <Link to="/">
                                    <span><img src={ imgLogin.logoLight } alt="logo" height="80" /></span>
                                </Link>
                            </div>

                            <div className="card-body p-4">
                                
                                <div className="text-center w-75 m-auto">
                                    <h4 className="text-dark-50 text-center pb-0 fw-bold">Sign In</h4>
                                    <p className="text-muted mb-4">Enter your email address and password to access admin panel.</p>
                                </div>

                                <form action="#">

                                    <div className="mb-3">
                                        <label htmlFor="emailaddress" className="form-label">Email address</label>
                                        <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                                    </div>

                                    <div className="mb-3">
                                        {/* <a href="pages-recoverpw.html" className="text-muted float-end"><small>Forgot your password?</small></a> */}
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <div className="input-group input-group-merge">
                                            <input type={showPassword ? 'password':'text'}id="password" className="form-control" placeholder="Enter your password" />
                                            <div className="input-group-text" onClick={() => {setShowPassword(!showPassword)}} data-password={showPassword ? 'true':'false'}>
                                                <FontAwesomeIcon className="password-eye" icon={showPassword ? faEye : faEyeSlash} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3 mb-3">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="checkbox-signin" defaultChecked />
                                            <label className="form-check-label" htmlFor="checkbox-signin">Remember me</label>
                                        </div>
                                    </div>

                                    <div className="mb-3 mb-0 text-center">
                                        <button className="btn btn-primary" type="submit"> Log In </button>
                                    </div>

                                </form>
                            </div> 
                        </div>
                        

                        {/* <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p className="text-muted">Don't have an account? <a href="pages-register.html" className="text-muted ms-1"><b>Sign Up</b></a></p>
                            </div> 
                        </div> */}
                        

                    </div> 
                </div>
                
            </div>
            
        </div>
        

        <footer className="footer footer-alt">
            2018 - {year} All rights reserved by iCHAT
        </footer>
    </div>
    </>
  )
}

export default Login