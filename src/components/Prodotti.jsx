import { useState } from "react";
import { useEffect } from "react";

const API_URL = " https://fakestoreapi.com/products";





function Prodotti() {
    const [listaProdotti, setListaProdotti] = useState([]);
    useEffect(() => {
        fetch(API_URL)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json)
                setListaProdotti(json)
            })
    }, []);
    return <div className="row">
        {listaProdotti.map(data => {
            return (<div key={data.id} className="col-12 col-md-6 col-lg-3 mb-4 mt-4">
                <div className="card h-100" >
                    <img src={data.image} className="card-img-top" style={{ width: "300px" }} alt="immagine prodotto e-commerce" />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                        <h1>{`${data.price}$`}</h1>

                    </div>
                </div>
            </div>
            )
        })}
    </div>
};


export default Prodotti;