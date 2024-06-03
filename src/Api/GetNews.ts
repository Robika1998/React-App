import axios from "axios";

export const ApiManager = axios.create({
  baseURL: "http://192.168.1.130:3000/",
  responseType: "json",
  withCredentials: true,
  httpsAgent: {
    rejectUnauthorized: false,
  },
});

export const GetNews = async (body?: any): Promise<any> => {
  try {
    const { page, pageSize } = body;
    console.log(`Requesting news with page: ${page}, pageSize: ${pageSize}`);
    const res: any = await ApiManager.get(`news`, {
      params: {
        page,
        pageSize,
        date: "desc",
        dates: "asc",
        // desc  | asc
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to fetch news");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
