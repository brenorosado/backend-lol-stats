import { doGetRequest } from "helpers/ApiHelper";
import { BASE_URL } from 'helpers/ConfigHelper';

const fetchData = async (summonerId) => {

    const lolData = await doGetRequest(`${BASE_URL}/lol/league/v4/entries/by-summoner/${summonerId}`)
        .then(({ data }) => data)
        .catch(e => res.status(e.response.status).json(e.response.data));

    return lolData;
};

export default { fetchData };