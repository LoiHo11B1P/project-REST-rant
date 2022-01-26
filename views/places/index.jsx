const React = require('react')
const Def = require('../default')

function index (data) {
    let placeFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6">
            <h2>
              <a href={`/places/${place.id}`}>
                {place.name}
              </a>
            </h2>
            ...
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