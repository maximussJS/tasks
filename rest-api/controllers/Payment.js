const { PaymentService } = require('../services');

class PaymentController {
    constructor() {
        this.paymentService = new PaymentService();
    }

    calculateMonthlyRate(req, res) {
        const result = this.paymentService.calculateMonthlyRate(req.body);

        if (result instanceof Error) {
            return res.status(400).json({
                message: result.message
            })
        }

        return res.status(200).json({ result })
    }
}

module.exports = PaymentController;