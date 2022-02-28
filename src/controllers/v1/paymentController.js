/**
 * Payment
 * This controllers manipulates data related to payments
 * @module controllers/v1/paymentController
 * @requires models
 * @requires axios
 */

const paymentController = {
  /**
   * Get all teams
   * @function
   * @param {express.Request} req - Express request object
   * @param {express.Response} res - Express response object
   */
  async all(req, res) {
    res.send({ message: 'Hello World' });
  },
};

module.exports = paymentController;
