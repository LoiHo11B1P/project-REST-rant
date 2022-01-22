const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main className='container-fluid'>
                <div className='py-5'>
                    <h1 className='pb-5'>Welcome to Rest-Rant</h1>
                    <div>
                        <img src="/images/oneself.jpg" alt="Standing alone" width={'800em'} />
                    <div>
                        Photo by <a href="https://unsplash.com/@coopery">Mohamed Nohassi</a> on <a href='https://unsplash.com/'>Unsplash</a>
                    </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home


