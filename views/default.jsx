const React = require('react');

function Def (html) {
    let nextYear = new Date().getFullYear()+1
    return (
        <html>
            <head>
                
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                <link rel="stylesheet" href='/css/style.css'></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/places'>Places</a>
                        </li>
                        <li>
                            <a href='/places/new'>Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
                <footer className='d-flex justify-content-center align-items-center'>
                    <h3>Copyright Vinh Pham 2021-{ nextYear }</h3>
                </footer>
            </body>
        </html>
    )
  }

module.exports = Def