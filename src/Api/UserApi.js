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
    return new Promise(async (resolve, reject) => {
      resolve(data);
    });
  } catch (error) {
    return new Promise(async (resolve, reject) => {
      reject();
    });
  }
};

export async function emailGithubVerification(
  email,
  githubUserName,
  resultFunction
) {
  let { data } = await axios.get(
    "https://api.github.com/search/users?q=" + githubUserName + "in:" + email
  );

  let result;
  if (data.items.length > 0) {
    result = true;
    resultFunction(result);
  } else {
    result = false;
    resultFunction(result);
  }
}

export function profileForm(formData) {
  axios.post("/profilePost", formData, config);
}

export async function verificationImageUpload(formData2, resultFunction) {
  let result; 
  let { data } = await axios.post(
    "/verificationImageUpload",
    formData2,
    config
  );

  console.log("ivade ethi");
  console.log(data);
  result = data;
  resultFunction(result);
}

//https://api.github.com/search/users?q=ashique-ali-db7+in:ashiquealikmvkd@gmail.com

// google clientid : 680809948788-884h20uqor8gnboufpl40vdfi5rflo02.apps.googleusercontent.com

// lcient secert : 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
