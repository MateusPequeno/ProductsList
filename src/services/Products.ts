import { BASE_URL } from "../config";

export const api = {
  //get all products from api
  getAllProducts: async () => {
    try {
      let req = await fetch(`${BASE_URL}/0`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("::getAllProducts::REQ", req);
      let json = await req.json();
      return json;
    } catch (error) {
      console.error("::getAllProducts::ERROR", error);
    }
  },
};
