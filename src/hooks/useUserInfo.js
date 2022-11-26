import { useEffect, useState } from "react"

const useUserInfo = email => {
    const [userInfo, setUserInfo] = useState('');
    useEffect(() => {
        fetch(`https://rythm-bazar-server.vercel.app/users?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data);
            })
    }, [email])

    return [userInfo];
}

export default useUserInfo;