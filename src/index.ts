import axios from 'axios';

const athletes_id = "32390131";
const endPoint = `/athletes/${athletes_id}/`;
const url = `https://www.strava.com/api/v3${endPoint}`;
const requestURL = "stats\" -H \"accept: application/json\" -H \"authorization: Bearer d65657c4a562d558b0b891d166e3b95fe13be27e\"";
import 'dotenv/config';
import * as strava from 'strava-v3';

strava.athlete.get({id:32390131}, (err,payload,limits) => {
    if (err) {
        console.log(err);
    } else {
        console.log(payload);
    }
});



// axios({
//     method: "GET",
//     url: url + requestURL
// }).then(function(response){
//     console.log(response);
//
// }).catch(error => {
//     console.log("Failed!")
// });



