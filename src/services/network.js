const GET_DATA_URL = 'https://randomuser.me/api/?results=200'
export const getData = async (url = '') => {
    const response = await fetch(url)
    return await  response.json()
}

// getData('https://randomuser.me/api/?results=200')
//     .then(({results}) => setContacts(results))