const { Router } = require('express');
const { getAll, deleteUser, getGas, getGasIng, getDes, getDesIng, getMeca, getMecaIng, getTi, getEnergias, getModas, getModasIng, getAgricultura, getProc, countG, countGI, countD, countDI, countT, countM, countMI, countMo, countMoI, countAg, countEn } = require('../controllers/getController');

const router = Router();

router.get('/empresas/list', getAll);
router.get('/empresas/gastro', getGas)
router.get('/empresas/gastroI', getGasIng);
router.get('/empresas/des', getDes);
router.get('/empresas/desI', getDesIng);
router.get('/empresas/meca', getMeca);
router.get('/empresas/mecaI', getMecaIng);
router.get('/empresas/ti', getTi);
router.get('/empresas/energias', getEnergias);
router.get('/empresas/moda', getModas);
router.get('/empresas/modaI', getModasIng);
router.get('/empresas/agri', getAgricultura);
router.get('/empresas/procesos', getProc);
router.get('/empresas/gTsu', countG);
router.get('/empresas/gIng', countGI);
router.get('/empresas/dTsu', countD);
router.get('/empresas/dIng', countDI);
router.get('/empresas/tTsu', countT);
router.get('/empresas/mTsu', countM);
router.get('/empresas/mIng', countMI);
router.get('/empresas/moTsu', countMo);
router.get('/empresas/moIng', countMoI);
router.get('/empresas/agTsu', countAg);
router.get('/empresas/enTsu', countEn);
router.delete('/empresas/:id', deleteUser);

module.exports = router;