export const getInfoToLocal = (info:string)=> {
    if(typeof window === "undefined"){
        return null
    }
    const data = localStorage.getItem(info)


    const dataInfo = data ? JSON.parse(data) : null
    return dataInfo
}