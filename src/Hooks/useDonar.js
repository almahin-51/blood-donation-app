import { useEffect, useState } from "react"

const useDonar = (email) => {
    const [donar, setDonar] = useState({})
    useEffect(() => {
        fetch(`https://evening-river-70665.herokuapp.com/donardata/${email}`)
        .then(res => res.json())
        .then(data => setDonar(data))
    }, [email])
    return {donar}
}
export default useDonar;