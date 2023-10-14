export const getInfoToLocal = (info:string)=> {
    const data = localStorage.getItem(info)

    const dataInfo = data ? JSON.parse(data) : null
    return dataInfo
}