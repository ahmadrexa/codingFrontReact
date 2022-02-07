import { create } from 'apisauce'


const url = "https://murmuring-tundra-31743.herokuapp.com/movies/3/trending/movie/day?api_key=4ba2c80bd43f2892ecb3349fa445015f"
// define the api
export const api = create({
  baseURL: "http://89.42.208.245:9090/api/"
 
})
//Http Status Code
export const HTTP_STATUS_CODE_OK = 200;
export const HTTP_STATUS_CODE_CREATED = 201;
export const HTTP_STATUS_CODE_NO_CONTENT = 204;
export const HTTP_STATUS_CODE_BAD_REQUEST = 400;
export const HTTP_STATUS_CODE_UNAUTHORIZED = 401;
export const HTTP_STATUS_CODE_FORBIDDEN = 403;
export const HTTP_STATUS_CODE_SERVER_ERROR = 500;
api.addResponseTransform(response => {
 console.log("manAhmadrezaHastam", response)
switch(response.status){
  case HTTP_STATUS_CODE_BAD_REQUEST:
    alert("400");
    break;
  case HTTP_STATUS_CODE_UNAUTHORIZED:
    alert("401");
    break;
}
 if(response.status === 200){
      return response
 } else {
      throw response
 }
})

export default api;