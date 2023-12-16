import { useEffect, useState } from "react";

const useOnlineStatus =  () => {
    
    //check we are online or offline

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", ()=> {
            setOnlineStatus(false);
        })

        window.addEventListener("offline", ()=> {
            setOnlineStatus(false);
        })
    }, [])
    
    //boolean number
    return onlineStatus;
}

export default useOnlineStatus;