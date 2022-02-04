
import axios from "axios";


const config = {
  headers: {
    "Content-type": "application/json",
  },
};



export const githubVerification = (code, config) =>
  axios.post("/github", code, config);



export const googleAuth = async (email) => {
  try {
    let { data } = await axios.post("/googleVerification", email, config);
    return new Promise(async(resolve,reject)=>{
      resolve(data)
    })

  } catch (error) {
    console.log(error.response.data.message);
    return new Promise(async(resolve,reject)=>{
      reject();
    })
  }
};

//https://api.github.com/search/users?q=ashique-ali-db7+in:ashiquealikmvkd@gmail.com

// google clientid : 680809948788-884h20uqor8gnboufpl40vdfi5rflo02.apps.googleusercontent.com

// lcient secert : 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
