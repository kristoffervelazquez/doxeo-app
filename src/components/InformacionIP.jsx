import useFetch from '../hooks/useFetch'

const InformacionIP = ({ ip: ipcliente }) => {

    const { data, loading } = useFetch(`https://ipinfo.io/${ipcliente}?token=162a8bc3eb6df5`);

    const { ip, city, country, hostname, loc, org, postal, region, timezone } = !!data && data;



    return (
        <>
            {
                !loading
                &&
                <div className="informacion">
                    <h1>Información de la IP: {ip}</h1>
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

        </>
    )
}

export default InformacionIP