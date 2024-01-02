const {StatusCodes} = require("http-status-codes")

class AppError {
    constructor(
        name,
        explanation,
        message,
        statusCode
    ) {
        this.name = name,
        this.explanation = explanation,
        this.message = message,
        this.statusCode = StatusCodes
    }
}

module.exports = AppError;