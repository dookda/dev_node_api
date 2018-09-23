var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/', (req, res) => {
  res.render('index', {
    'title': 'web api with PostgreSQL'
  })
});

router.get('/api/what2eat', db.getList);
router.get('/api/what2eat/:id', db.getOne);
router.post('/api/what2eat', db.createData);
router.put('/api/what2eat/:id', db.editData);
router.delete('/api/what2eat/:id', db.deleteData);

module.exports = router;