import { useState } from 'react'
import useFetch from '../hooks/useFetch'

const InformacionIP = ({ ip: ipcliente, loading: cargando }) => {

    const [IpInfo, setIpInfo] = useState(ipcliente);
    const [Input, setInput] = useState('');

    const { data, loading } = useFetch(`https://ipinfo.io/${IpInfo}?token=162a8bc3eb6df5`);

    const { ip, city, country, hostname, loc, org, postal, region, timezone } = !!data && data;

    const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

    const handleSubmit = e => {
        e.preventDefault();

        if (regexExp.test(Input)) {
            setIpInfo(Input);

        }else{
            console.log('Ip invalida')
        }


    }


    return (
        <div className="informacion">
            <form onSubmit={handleSubmit} className="busqueda">
                <input onChange={e => setInput(e.target.value)} type="text" />
                <input className="boton" type="submit" value="Buscar" />
            </form>
            {
                !loading
                &&
                <div >


                    <h2>Información de la IP: {ip}</h2>
                    <p>Ciudad: <span>{city}</span></p>
                    <p>Region: <span>{region}</span> </p>
                    <p>Pais: <span>{country}</span> </p>
                    <p>Postal: <span>{postal}</span> </p>
                    <p>Hostaname: <span>{hostname}</span> </p>
                    <p>Localización: <span>{loc}</span> </p>
                    <p>Org: <span>{org}</span> </p>
                    <p>Timezone: <span>{timezone}</span> </p>
                </div>
            }

        </div>
    )
}

export default InformacionIP