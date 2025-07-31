import {useEffect} from 'react'
import '../styles/loader.css'

function NotFound() {

    useEffect(() => {
        document.title = 'Hobbiton Insurance'
    }, [])

    return (
        <div className="loader-container">
            <h1>404</h1>
            <p>Resource Not found.</p>
        </div>
    )
}

export default NotFound
