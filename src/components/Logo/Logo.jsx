import loguito from "./assets/loguito.svg"


const Logo = () => {

    return (
        <header className="logo-container">
            <h1>
                <img src={loguito} alt="Logo" className="logo-image" />
            </h1>
        </header>



    )
}

export default Logo;