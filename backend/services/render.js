import axios from "axios";

export const devRoutes =  async (req,res)=>{
    try {
      const response = await  axios.get('http://localhost:3000/device/show-device')
        
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

