import axios from "axios";
import lodash from "lodash";

const url: string = "http://localhost:3689/api";
const myUrl: string = "http://localhost:3689";

export const registerAPI = async (data: any) => {
  const config: any = {
    "content-type": "multipart/form-data",
  };

  try {
    return await axios
      .post(`${url}/v1/create-user`, data, config)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const signInAPI = async (data: any) => {
  try {
    return await axios.post(`${url}/v1/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const writeYouTubeEndpoint = async (data: any) => {
  try {
    return await axios.post(`${myUrl}/data`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getYouTubeEndpoint = async () => {
  try {
    return await axios.get(`${myUrl}/read`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchYouTubeAPI = async (search: any) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: search,
      part: "snippet,id",
      regionCode: "NG",
      maxResults: "10",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "2162dc7312mshda727365a4eb713p1dbc78jsnf7ffe0baa113",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const check = await getYouTubeEndpoint();
    if (lodash.some(check, search)) {
      return check;
    } else {
      const response = await axios.request(options);
      const keyValue = search;
      const newData = {
        [keyValue]: response.data.items,
      };

      await writeYouTubeEndpoint({ message: newData });
      console.log(response.data.items);
      return response.data.items;
    }
  } catch (error) {
    console.error(error);
  }
};
