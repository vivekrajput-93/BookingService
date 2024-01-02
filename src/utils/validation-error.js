const {StatusCodes} = require("http-status-codes")

class ValidationError {
    constructor(error) {
        super();
        let expalanation = [];
        error.errors.forEach((err) => {
            expalanation.push(err.message)
        });

        this.name  = "ValidationError",
        this.message = "Not able to validate the data sent to request.",
        this.expalanation = expalanation,
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = ValidationError