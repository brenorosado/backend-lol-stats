import { doGetRequest } from "helpers/ApiHelper";
import { BASE_URL } from 'helpers/ConfigHelper';
import SummonerService from 'services/SummonerService';

const fetchData = async (summonerNickname) => {

    const summonerData = await SummonerService.fetchData(summonerNickname);

    const lolData = await doGetRequest(`${BASE_URL}/lol/league/v4/entries/by-summoner/${summonerData.id}`)
        .then(({ data }) => data)
        .catch(e => res.status(e.response.status).json(e.response.data));

    return { summonerData, lolData };
};

export default { fetchData };