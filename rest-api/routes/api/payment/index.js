const { Router } = require('express');
const { PaymentController } = require('../../../controllers');

const paymentController = new PaymentController();

module.exports = Router()
    .post('/', (req,res) => paymentController.calculateMonthlyRate(req, res));
