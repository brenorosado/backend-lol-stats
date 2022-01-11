import { doGetRequest } from "helpers/ApiHelper";
import { BASE_URL } from 'helpers/ConfigHelper';
import SummonerService from 'services/SummonerService';

let tier, rank, leaguePoints, wins, losses;

const fetchData = async (summonerNickname) => {
    console.log(summonerNickname);
    const summonerData = await SummonerService.fetchData(summonerNickname);

    await doGetRequest(`${BASE_URL}/tft/league/v1/entries/by-summoner/${summonerData.id}`)
    .then(({ data }) => ({ tier, rank, leaguePoints, wins, losses } = data[0]))
    .catch(e => res.status(e.response.status).json(e.response.data));
    
    console.log(tier, rank, leaguePoints, wins, losses)
    return {tier, rank, leaguePoints, wins, losses};
};

export default { fetchData };