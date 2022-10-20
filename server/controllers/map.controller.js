import axios from "axios";

const fields = ["formatted_address,name,geometry"];

function getMapData(req, res){
    const input = req.body.value;
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=${fields}&key=${process.env.MAP_API_KEY}`;
    axios.get(url).then(function (response) {
        const data = response.data.candidates[0];
        res.send(data);
      }).catch(function (error) {
        console.log(error);
      });
};

export {getMapData};