class PaymentService {
    constructor() {}

    calculateMonthlyRate(data) {
        const {
            downPayment,
            numberOfMonths,
            interestRate,
            finalPayment = 0
        } = data;

        if (!downPayment || downPayment < 0) {
            return new Error('Invalid downPayment parameter (must be positive number)');
        }

        if (!numberOfMonths || numberOfMonths < 0) {
            return new Error('Invalid numberOfMonths parameter (must be positive integer)');
        }

        if (!interestRate || interestRate < 0 || interestRate > 100) {
            return new Error('Invalid interestRate parameter (must be from 0 to 100)');
        }

        return {
            monthlyRate: (((interestRate / 100) / Number.parseInt(numberOfMonths)) * downPayment) + finalPayment
        }
    }
}

module.exports = PaymentService;