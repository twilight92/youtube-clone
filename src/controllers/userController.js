import User from "../models/User";
import fetch from "node-fetch";
import bcrypt from "bcrypt";

/*

get은 렌더만 하면 되지만
post는 실제로 사용되어지는 기능을 담당하고 있다.
(데이터를 다루고 에러 처리, 유효성 체크 등을 하며 db와 통신)

*/
export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
    const {name, username, email, password, password2, location} = req.body;
    const pageTitle = "Join";

    if (password !== password2) {
        return res.status(400).render("join", {
            pageTitle,
            errorMessage: "Password confirmation does not match."
        });
    }

    const exists = await User.exists({ $or: [{username}, {email}] });

    if (exists) {
        return res.status(400).render("join", {
            pageTitle,
            errorMessage: "This username/email is already taken."
        });
    }

    try {
        await User.create({
            name, username, email, password, location,
        });
        return res.redirect("/login");
    } catch(error) {
        return res.status(400).render("join", { pageTitle: "Upload Video", errorMessage: error._message });
    }
};

export const getLogin = (req, res) => res.render("Login", { pageTitle: "Login" });
export const postLogin = async(req, res) => {
    const {username, password} = req.body;
    const pageTitle = "Login";
    const user = await User.findOne({username});

    // check if account exists
    if (!user) {
        return res.status(400).render("login", { pageTitle, errorMessage: "An account with this username does not exist"});
    }

    // check if password correct
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        return res.status(400).render("login", {
            pageTitle,
            errorMessage: "Wrong password",
        })
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/")
}

export const startGithubLogin = (req, res) => {
    const baseURL = "https://github.com/login/oauth/authorize";
    const config = {
        client_id: process.env.GH_CLIENT,
        allow_signup: false,
        scope: "read:user user:email",
    }
    const params = new URLSearchParams(config).toString();
    const finalURL = `${baseURL}?${params}`;
    return res.redirect(finalURL);
};

export const finishGithubLogin = async (req, res) => {
    const baseURL = "https://github.com/login/oauth/access_token";
    const config = {
        client_id: process.env.GH_CLIENT,
        client_secret: process.env.GH_SECRET,
        code: req.query.code,
    };
    const params = new URLSearchParams(config).toString();
    const finalURL = `${baseURL}?${params}`;
    const tokenRequest = await (
        await fetch(finalURL, {
            method: "POST",
            headers: {
                Accept: "application/json"
            }
        })
    ).json();
    if ("access_token" in tokenRequest) {
        //access api
        const { access_token } = tokenRequest;
        const userData = await (await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `token ${access_token}`,
            }
        })).json();
        console.log(userData);
    } else {
        return res.redirect("/login");
    }
};

export const edit = (req, res) => res.render("Edit User");
export const remove = (req, res) => res.send("Remove Usere");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");