import axios from "axios";
import { RIOT_KEY } from "./ConfigHelper";

const options = {
    headers: {'X-Riot-Token': RIOT_KEY}
}

export const doGetRequest = (path) => {
    return axios.get(path, options).catch(console.error);
};