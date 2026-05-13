import {
    useParams
} from 'react-router'
import { useState } from 'react';
import { useEffect } from 'react';
import { apiFetchSingleP } from '../utils/fetchapi';


function Prodotto() {
    const { prodottiId } = useParams();
    const [prodottoSingolo, SetProdottoSingolo] = useState({});

    useEffect(() => {
        apiFetchSingleP(prodottiId)
            .then(data => {
                SetProdottoSingolo(data)
            })
    }, [prodottiId])

    return <div className="card h-100 shadow-lg mt-4">

        <img
            src={prodottoSingolo.image}
            className="card-img-top p-3"
            alt={prodottoSingolo.title}
            style={{ height: "250px", objectFit: "contain" }}
        />

        <div className="card-body d-flex flex-column">

            <h5 className="card-title text-primary">
                {prodottoSingolo.title}
            </h5>


            <p className="card-text text-muted">
                {prodottoSingolo.description}
            </p>


            <div className="mt-auto">
                <span className="fs-4 fw-bold text-primary">
                    {prodottoSingolo.price} &euro;
                </span>
            </div>

        </div>
    </div>
}
export default Prodotto