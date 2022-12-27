import React from 'react'
import './styles/ItemListContainer.css'

export default function ItemListContainer(props) {
  return (
    <>
      {/* desde ItemListContainer.js 
      {props.saludo}
      <img src={props.img} className="img-thumbnail img-fluid"/>
      {props.img} */}

        <div className="container">

        <h2 className="text-center m-5">{props.saludo}</h2>

            <div className="row d-flex justify-content-center gap-5 mb-4">
                <div className="card tamano col-12 col-md-4">
                    <img src={props.img.iphone} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div className="card tamano col-12 col-md-4">
                    <img src={props.img.airpods} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div className="card tamano col-12 col-md-4">
                    <img src={props.img.laptop} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}
