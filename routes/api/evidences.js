/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();


// load Evidence model
const Evidence = require('../../models/Evidence');

// @route GET api/evidences/test
// @description tests evidence route
// @access public
router.get('./test', (_req, res) => res.send('evidence route working'));


// @route GET api/evidences
// @description get all evidence
// @access public
router.get('/', (_req, res) => {
  Evidence.find()
    .then((evidences) => res.json(evidences) + res.send(evidences))
    .catch((_err) => res.status(404).json({ noevidencefound: 'No evidence found' }));
});



// @route GET api/evidences/:id
// @description get single evidence by id
// @access public
router.get('/:id', (req, res) => {
  Evidence.findById(req.params.id)
    .then((evidence) => res.send(evidence))
    .catch((_err) => res.status(404).json({ noevidencefound: 'No evidence found' }));
});


// @route GET api/evidences
// @description add/save evidence
// @access public
router.post('/:', (req, res) => {
  Evidence.create(req.body)
    .then((_evidence) => res.json({ msg: 'Evidence added successfully' }))
    .catch((_err) => res.status(404).json({ error: 'unable to add this evidence' }));
});

// @route GET api/evidence/:id
// @description update book
// @access public
router.put('/:id', (req, res) => {
  Evidence.findByIdAndUpdate(req.params.id, req.body)
    .then((_evidence) => res.json({ msg: 'updated successfully' }))
    .catch((_err) => res.status(404).json({ error: 'No evidence found' }));
});


// @route GET api/evidence/:id
// @description delete by id
// @access public
router.delete('/:id', (req, res) => {
  Evidence.findByIdAndRemove(req.params.id, req.body)
    .then((_evidence) => res.json({ msg: 'Evidence entry deleted successfully' }))
    .catch((_err) => res.status(404).json({ noevidencefound: 'No evidence found' }));
});

module.exports = router;
