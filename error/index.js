const CustomAPIError = require("./custom-error")
const badRequest = require("./bad-request")
const notAuthorizedError = require("./notAuthorized")

module.exports = {
    CustomAPIError,
    badRequest,
    notAuthorizedError
}