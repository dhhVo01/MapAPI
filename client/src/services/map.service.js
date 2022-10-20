import httpCommon from "../http-common";


function findPlace(inputText){
    
    return httpCommon.post("/place", inputText);
}
export { findPlace };