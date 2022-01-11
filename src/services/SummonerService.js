import { doGetRequest } from "helpers/ApiHelper";
import { BASE_URL } from 'helpers/ConfigHelper';

let id, accountId, puuid, name, profileIconId, revisionDate, summonerLevel;

const fetchData =  async (summonerNickname) => {
    await doGetRequest(`${BASE_URL}/lol/summoner/v4/summoners/by-name/${summonerNickname}`)
    .then(({ data }) => ({ id, accountId, puuid, name, name, revisionDate, summonerLevel } = data))
    .catch(e => res.status(e.response.status).json(e.response.data));
    
    console.log(id, accountId, puuid, name, profileIconId, revisionDate, summonerLevel);
    return { id, accountId, puuid, name, profileIconId, revisionDate, summonerLevel };
};

export default { fetchData };