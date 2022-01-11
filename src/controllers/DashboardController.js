import express from 'express';
import TftService from 'services/TftService';

const router = express.Router();

router.get('/:summonerNickname', async (req, res) => {
    const summonerNickname = req.params.summonerNickname;

    try {
        const tftData = await TftService.fetchData(summonerNickname);
        return res.send(tftData);
    } catch (error) {
        return res.send(`error: ${error}`);
    };
});

// router.get('/lol', (req, res) => {

//     try {
//         return res.jsonOk();
//     } catch (error) {
//         return res.jsonBadRequest({ error });
//     };
// });

module.exports = router;