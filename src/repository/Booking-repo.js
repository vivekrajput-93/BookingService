const { StatusCodes } = require("http-status-codes")
const {Booking} = require("../models/index")
const {validationError, AppError} = require("../utils/index")

class BookingRepository {

    async create(data) {
        try {
            const booking = await Booking.create();
            return booking;
        } catch (error) {
            if(error == 'SequelizeValidationError') {
                throw new validationError
            }
            throw new AppError (
                'RepositoryError',
                'Cannot create Booking',
                'There was some issue creating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR)
            
        }
        
    }
}
module.exports = BookingRepository;