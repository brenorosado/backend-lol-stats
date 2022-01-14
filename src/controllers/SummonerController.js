import express from 'express';
import SummonerService from 'services/SummonerService';

const router = express.Router();

router.get('/:summonerNickname', async (req, res) => {
    const summonerNickname = req.params.summonerNickname;

    try {
        const summonerData = await SummonerService.fetchData(summonerNickname);
        return res.send(summonerData);
    } catch (error) {
        return res.send(`error: ${error}`);
    };
});

module.exports = router;