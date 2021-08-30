import React from 'react';
import './style.css';

function MovieContainer (props) {
  return (
    <div>
      {/* <div className="container" id={props.movieid}>
        <div className="card" onMouseOver={()=>handleMouseover(props.movieid)}>
          <div className="image-container">
            <img
              src={props.posterurl}
              alt=""
              
            />
          </div>
          <div className="basic-info">
            <div className="title" >
              <h1>{props.title}</h1>
            </div>
            <div className="year">
              <h1>{props.year}</h1>
            </div>
          </div>
          
          <div className="description" >
            <p>
              {props.description}
            </p>
          </div>
        </div>
      </div> */}
      <div className="card" id={props.movieid} style={{"width":"400px"}}>
  <img className="card-img-top" src={props.posterurl} alt=""/>
  <div class="card-body">
    <h4 class="card-title">{props.title}</h4>
    <p class="card-text">{props.description}</p>
    <p className="year">Released on {props.year}</p>
  </div>
</div>
      </div>
    
 
    
  );
}

export default MovieContainer;
