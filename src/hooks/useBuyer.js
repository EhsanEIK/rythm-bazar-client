import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState('');
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        fetch(`https://rythm-bazar-server.vercel.app/users/checkBuyer/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsBuyer(data.isBuyer);
                setIsBuyerLoading(false);
            })
    }, [email])
    return [isBuyer, isBuyerLoading];
}

export default useBuyer;