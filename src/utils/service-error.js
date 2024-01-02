const { StatusCodes } = require("http-status-codes");

class ServiceError extends Error {
  constructor(
    message = "Something went wrong !",
    expalanation = 'Service layer error',
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
     this.name = "ServiceError";
     this.message = message;
     this.expalanation = expalanation;
     this.statusCode = statusCode
  }
}


module.exports = ServiceError;