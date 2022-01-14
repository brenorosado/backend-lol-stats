import { doGetRequest } from "helpers/ApiHelper";
import { MATCHES_BASE_URL } from 'helpers/ConfigHelper';

const fetchData = async (summonerPuuid) => {

    const lolMatchesIds = await doGetRequest(`${MATCHES_BASE_URL}/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=0&count=10`)
            .then(({ data }) => data)
            .catch(e => res.status(e.response.status).json(e.response.data));

    const lolMatchesData = await Promise.all([
        doGetRequest(`${MATCHES_BASE_URL}/lol/match/v5/matches/${lolMatchesIds[0]}`)
            .then(({ data }) => data)
            .catch(e => res.status(e.response.status).json(e.response.data)),
        doGetRequest(`${MATCHES_BASE_URL}/lol/match/v5/matches/${lolMatchesIds[1]}`)
            .then(({ data }) => data)
            .catch(e => res.status(e.response.status).json(e.response.data)),
        doGetRequest(`${MATCHES_BASE_URL}/lol/match/v5/matches/${lolMatchesIds[2]}`)
            .then(({ data }) => data)
            .catch(e => res.status(e.response.status).json(e.response.data)),
        doGetRequest(`${MATCHES_BASE_URL}/lol/match/v5/matches/${lolMatchesIds[3]}`)
            .then(({ data }) => data)
            .catch(e => res.status(e.response.status).json(e.response.data)),
        doGetRequest(`${MATCHES_BASE_URL}/lol/match/v5/matches/${lolMatchesIds[4]}`)
            .then(({ data }) => data)
            .catch(e => res.status(e.response.status).json(e.response.data)),
        doGetRequest(`${MATCHES_BASE_URL}/lol/match/v5/matches/${lolMatchesIds[5]}`)
            .then(({ data }) => data)
            .catch(e => res.status(e.response.status).json(e.response.data)),
        doGetRequest(`${MATCHES_BASE_URL}/lol/match/v5/matches/${lolMatchesIds[6]}`)
            .then(({ data }) => data)
            .catch(e => res.status(e.response.status).json(e.response.data)),
        doGetRequest(`${MATCHES_BASE_URL}/lol/match/v5/matches/${lolMatchesIds[7]}`)
            .then(({ data }) => data)
            .catch(e => res.status(e.response.status).json(e.response.data)),
        doGetRequest(`${MATCHES_BASE_URL}/lol/match/v5/matches/${lolMatchesIds[8]}`)
            .then(({ data }) => data)
            .catch(e => res.status(e.response.status).json(e.response.data)),
        doGetRequest(`${MATCHES_BASE_URL}/lol/match/v5/matches/${lolMatchesIds[9]}`)
            .then(({ data }) => data)
            .catch(e => res.status(e.response.status).json(e.response.data)),
    ]);

    return lolMatchesData[1];
};

export default { fetchData };