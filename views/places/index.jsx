const React = require('react')
const Def = require('../default')

function index (data) {
    let placeFormatted = data.places.map((place, index) => {
        return (
            
            <div className='col-sm-6 text-center' key={place.name}>
                <h2>
                    <a href={`/places/${index}`}>
                        {place.name}
                    </a>
                </h2>
                <p>
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} width={'300em'} height={'300em'}/>
                <p>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main className='container'>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>
                    {placeFormatted}
                </div>
                <a href='/places/new'>
                    <button className='btn btn-info'>New Place</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = index