import React from 'react';

const Footer = () =>{
    return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="footer p-3 mt-4 text-center bg-dark text-light">
                Developed By:
                <span className="text-warning font-weight-normal">
                  David Zuluaga
                </span>
                , Using <i className="fab fa-react" /> React JS &amp; Redux JS
                integrated with external pokemon data API {''}
                <a
                  href="http://https://pokeapi.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  POKE-API 
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Footer;