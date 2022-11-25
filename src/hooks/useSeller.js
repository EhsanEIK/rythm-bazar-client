import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState('');
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/users/checkSeller/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isSeller);
                setIsSellerLoading(false);
            })
    }, [email])
    return [isSeller, isSellerLoading];
}

export default useSeller;