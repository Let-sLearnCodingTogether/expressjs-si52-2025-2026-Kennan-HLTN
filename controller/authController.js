export const register = async (req, res) => {
    try {
        res.status(201).json({
            message: "Successfully Registered, Please Login",
            data : null
        })
    } catch(e){
        res.status(500).json({
            message: e.message,
            data : null
        })
    }
}