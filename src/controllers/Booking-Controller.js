
const {BookingService} = require("../services/index")

const bookingService = new BookingService();


const create = async (req, res) => {
    try {
        const response = await bookingService.createBooking(req.body);
        console.log(response)
        return res.status(200).json({
            data : response,
            succcess : true,
            message : "Successfully booked a flight",
            err : {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            succcess : false,
            message : "not able to fetch the data",
            err : error 
        })
    }
}

module.exports =  {
    create
}