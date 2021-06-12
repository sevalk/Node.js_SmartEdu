exports.getIndexPage = (req, res) => {
    console.log(req.session.userID);
    res.status(200).render('index', {
        page_name: "index"
    });
}
exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: "about"
    });
}

exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: "register"
    });
}
exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
        page_name: "login"
    });
}
exports.getContactPage = (req, res) => {
    res.status(200).render('contact', {
        page_name: "contact"
    });
}
exports.sendMail = (req, res) => {
    try{
        console.log(req.body);

    req.flash("success", "We Received your message succesfully");

    res.status(200).redirect('/contact');

    }
    catch{
        req.flash("error", `Something happened!`);
        res.status(200).redirect('/contact');
    }

    
}