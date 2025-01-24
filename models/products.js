const mongoose = require('mongoose');
const { type } = require('os');
const productSchema = new mongoose.Schema({
  nome:{type: String, required: true},
  tipo:{type: String, required: true},
  quantidade:{type: Number, required: true, min:0},