import React from 'react';

export default function App() {
return (
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active">
<img src="https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg" className="d-block w-100" alt="..." />
<div className="carousel-caption">
<h5>First slide label</h5>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</div>
</div>
<div className="carousel-item">
<img src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" className="d-block w-100" alt="..." />
<div className="carousel-caption">
<h5>Second slide label</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
</div>
<div className="carousel-item">
<img src="https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg" className="d-block w-100" alt="..." />
<div className="carousel-caption">
<h5>Third slide label</h5>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</div>
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>
);
}