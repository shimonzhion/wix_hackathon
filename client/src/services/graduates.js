const BASE_URL = "http://localhost:8090"

const getAllGraduates = async () => {
    try {
        return await fetch(`${BASE_URL}/api/graduates`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
    }
    catch (error) { console.log(error); }
}
    export default getAllGraduates;