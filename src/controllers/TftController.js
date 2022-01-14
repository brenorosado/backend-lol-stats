import express from 'express';
import TftRankService from 'services/TftRankService';

const router = express.Router();

router.get('/:summonerNickname', async (req, res) => {
    const summonerNickname = req.params.summonerNickname;

    try {
        const tftData = await TftRankService.fetchData(summonerNickname);
        return res.send(tftData);
    } catch (error) {
        return res.send(`error: ${error}`);
    };
});

module.exports = router;