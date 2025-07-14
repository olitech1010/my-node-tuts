import constants from "../utils/constants.js";
const errorHander = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Bad Request: Your request was broken or wrong",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized: You need to log in.",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden: You are not allowed to access this.",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found: This page does noot exist.",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        
        default:
            console.log("No error found. All is good!!");
    }
}


export default errorHander;