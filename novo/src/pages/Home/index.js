import React from "react";
import { Link } from 'react-router-dom'

const Page = () => {
    return (
        <div>
            <h2>Pagina Inicial</h2>
            <Link to="/About">Sobre</Link>
        </div>
    )
}

export default Page 