const getAllAsync = async () => { // Jocke 8 1:21
    const res = await fetch('http://localhost:8081/api/package/')
    if(!res.ok)throw new Error('Something went wron when getting all packages')
    return res.json()
}

const getByIdAsync = async (packageId: string) => { // Jocke 8 1:21
    const res = await fetch('http://localhost:8081/api/package/' + packageId)
    if(!res.ok)throw new Error('Something went wrong when getting a package')
    return res.json()
}

const packageService = {
    getAllAsync,
    getByIdAsync
}

export default packageService