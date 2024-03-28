import axios from "axios";

const graduateRegister = async (graduateData) => {
    try {
      const response = await fetch('http://localhost:8090/api/graduate/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(graduateData)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error:', error);
      throw error; 
    }
  }




  const coordinatorRegister = async (coordinatorData) => {
    try {
      const response = await axios.post('http://localhost:8090/api/coordinators/register', coordinatorData);
      return response.data;
    } catch (error) {
     return error.response.data
    //   throw error;
    }
  }
  

export { graduateRegister, coordinatorRegister };