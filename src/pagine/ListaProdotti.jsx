import { useState } from "react";
import { useEffect } from "react";
import { apiFetch } from "../utils/fetchapi";
import { Link, } from "react-router";




function ListaProdotti() {
    const [listaProdotti, setListaProdotti] = useState([]);
    useEffect(() => {
        apiFetch()
            .then(data => {
                setListaProdotti(data)
            })
    }, []);

    return <div className="row mt-3">
        <ul>
            {listaProdotti.map(prodotti => {
                return <li key={prodotti.id}>
                    <Link to={`/prodotto/${prodotti.id}`}>
                        {prodotti.title}
                    </Link>
                </li>
            })
            }
        </ul>
    </div>
};
export default ListaProdotti;