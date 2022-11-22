import { Link } from 'react-router-dom'

const Jumbotron = () => {
    return (
        <div className='imgJum'>
                <div className='col-12 col-md-9 col-lg-7 col-xl-6 pt-5 px-5'>
                    <div classNme='container-fluid py-5 mt-5 px-3'>
                        <h1 className='fw-bold text-white'>Visitanos</h1>
                        <p className='text-white shadou pt-2'>
                           Las mejores hamburguesas con carne madurada, ingredinetes de primera y el sabor que solo Angry Burger puede dar, que esperas y ven por una.
                        </p>
                    </div>
                    <div className='botoncitojt'>
                        <Link to='/Menu'>
                            <button className='btn btn-warning btn-lg mt-5 mb-5 fw-bold rounded-pill'>Hamburguesas</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
}

export default Jumbotron;