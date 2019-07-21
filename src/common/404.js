import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import Footer from "../common/footer"

class Page404 extends Component {

  render() {


    return (
        <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <p className="navbar-item">
            ERCPAY
          </p>
                       
                    </div>
                  
                </div>
            </nav>
        </div>  
 
        <div className="hero-body">
        <div className="container has-text-centered">
            <div className="columns is-vcentered">
                <div className="column is-5">
                    <figure className="image">
                        <img src="https://user-images.githubusercontent.com/24837709/57173766-65caff00-6e67-11e9-9060-52b7a65e5dce.jpg" alt="Description"/>
                    </figure>
                </div>
                <div className="column is-6 is-offset-1">
            
                    <h1 className="subtitle is-3">
                        404
                    </h1>
                
                </div>
            </div>
        </div>
    </div>
      
    </section>
        
    );
  }
}

export default Page404;
