const mongoose = require('mongoose');

const EvidenceSchema = new mongoose.Schema({
    article: {
        type: String, //type of data
        required: true //input is required
    },
    author: [{
        type: String,
        required: true
    }],
    title: {
        type: String,
        required: true
    },
    journal: {
        type: String
    },
    year: {
        type: String
    },
    eprint: {
        type: String
    },
    eprinttype: {
        type: String
    },
    eprintclass: {
        type: String
    },
    pages: {
        type: String
    },
    month: {
        type: String
    },
    annot: {
        type: String
    }, 
    claimStrength: {
        type: String,
        required: true
    }

});

module.exports = Evidence = mongoose.model('Evidence', EvidenceSchema);