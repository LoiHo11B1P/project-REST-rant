const React = require('react')
const Def = require('../default')

function index (data) {
    let placeFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6" key={place.id}>
            <h2>
              <a href={`/places/${place.id}` }>
                {place.name}
              </a>
            </h2>
            <p>{place.cuisines}</p>
            <img width={'400em'} height={'400em'}  src={place.pic} alt={place.name}/>
            <p>Located in {place.city}, {place.state}</p>
          </div>
        )
      })
    return (
        <Def>
            <main className='container-fluid py-5'>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>
                    {placeFormatted}
                </div>
                <a href='/places/new' >
                    <button className='btn btn-info bt-5'>New Place</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = index