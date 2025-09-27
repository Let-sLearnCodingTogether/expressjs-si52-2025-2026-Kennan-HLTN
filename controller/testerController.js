export const testerPage = (req, res) => {
    const name = req.params.name || 'Guest';
    res.render('hello tester welcome', {
        title: 'Hello Page',
        name: name
    });
};
