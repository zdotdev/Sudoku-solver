const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  orderNumber: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  orderDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  orderItems: {
    type: Array,
    required: true
  },
  orderPrices: {
    type: Array,
    required: true
  }
})

module.exports = orderSchema
