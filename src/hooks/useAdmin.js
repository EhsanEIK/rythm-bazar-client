import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState('');
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        fetch(`https://rythm-bazar-server.vercel.app/users/checkAdmin/${email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('rythmBazarToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin);
                setIsAdminLoading(false);
            })
    }, [email])
    return [isAdmin, isAdminLoading];
}

export default useAdmin;