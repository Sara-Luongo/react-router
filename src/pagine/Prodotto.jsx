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

    return <div>

    </div>
};
export default Prodotto