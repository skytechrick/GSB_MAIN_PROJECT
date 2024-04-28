
Main_Admin_Post = (req, res) =>{

    let d = req.body;

    console.log(d);

    // res.redirect("http://192.168.0.44/admin");
    res.json({"GOT":"Yes"});

}

module.exports = Main_Admin_Post;