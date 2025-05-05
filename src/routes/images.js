const Router = require('express').Router;
const multer = require('multer');
const Image  = require('../models/Image');
const upload = multer({ dest: 'public/uploads/' });

const router = Router();

// GET /api/images — lista tudo
router.get('/', async (req, res) => {
  const imgs = await Image.findAll({ order: [['createdAt','DESC']] });
  res.json(imgs);
});

// POST /api/images — cria novo pin
router.post('/', upload.single('file'), async (req, res) => {
  const { title, desc } = req.body;
  const url = `/uploads/${req.file.filename}`;
  const img = await Image.create({ title, desc, url });
  res.status(201).json(img);
});

// PUT /api/images/:id — atualiza título e descrição
router.put('/:id', async (req, res) => {
  const img = await Image.findByPk(req.params.id);
  if (!img) return res.sendStatus(404);
  await img.update({ title: req.body.title, desc: req.body.desc });
  res.json(img);
});

// DELETE /api/images/:id — apaga pin
router.delete('/:id', async (req, res) => {
  const img = await Image.findByPk(req.params.id);
  if (!img) return res.sendStatus(404);
  await img.destroy();
  res.sendStatus(204);
});

module.exports = router;
