import express from 'express';
import LolMatchesService from 'services/LolMatchesService';
import LolRankService from 'services/LolRankService';

const router = express.Router();

router.get('/:summonerNickname', async (req, res) => {
    const summonerNickname = req.params.summonerNickname;

    try {
        const lolRankData = await LolRankService.fetchData(summonerNickname);
        return res.send(lolRankData);
    } catch (error) {
        return res.send(`error: ${error}`);
    };
});

router.get('/matches/:summonerPuuid', async (req, res) => {
    const summonerPuuid = req.params.summonerPuuid;

    try {
        const lolMatchesData = await LolMatchesService.fetchData(summonerPuuid);
        return res.send(lolMatchesData);
    } catch (error) {
        return res.send(`error: ${error}`);
    };
});

module.exports = router;