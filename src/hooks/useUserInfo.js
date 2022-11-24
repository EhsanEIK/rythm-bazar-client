import { useEffect, useState } from "react"

const useUserInfo = email => {
    const [userInfo, setUserInfo] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data);
            })
    }, [email])

    return [userInfo];
}

export default useUserInfo;