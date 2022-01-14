import { doGetRequest } from "helpers/ApiHelper";
import { BASE_URL } from 'helpers/ConfigHelper';

const fetchData = async (summonerId) => {

    const tftData = await doGetRequest(`${BASE_URL}/tft/league/v1/entries/by-summoner/${summonerId}`)
        .then(({ data }) => data)
        .catch(e => res.status(e.response.status).json(e.response.data));

    return tftData;
};

export default { fetchData };