import {useEffect} from 'react'

function NotAuthorized() {

    useEffect(() => {
        document.title = 'Hobbiton Insurance'
    }, [])

    return (
        <div>
            Not Allowed access this resource
        </div>
    )
}

export default NotAuthorized
