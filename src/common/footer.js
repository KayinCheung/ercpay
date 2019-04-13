import React, { Component } from 'react';

class Footer extends Component {

    render(){

    return (
        <footer class="footer">
      
      <div class="content has-text-centered">
                <p>
                    <a href="">
                        <i class="fab fa-facebook-square fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-snapchat fa-2x"></i>
                    </a>
                </p>
                <p>
                    <a href="https://bulma.io">
                        <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24"/>
                    </a>
                </p>
            </div>
       
    </footer>
    );
  }
}

export default Footer;



