
export const publicProfile = (req,res) => {
    const username = req.params.username;

    res.render('public-profile', {
        title: username,
        username: username,
        bio : "Uriel Was Here"
    })
}
