import InformacionIP from './InformacionIP'
import '../App.css'

const ClienteIP = ({ datos }) => {

    const { data } = datos;

    const { ip } = !!data && data;

    return (
        <>
            <div className="cliente-ip">
                <h3>TU IP: {ip}</h3>

            </div>
            <InformacionIP ip={ip} />
        </>

    )
}

export default ClienteIP