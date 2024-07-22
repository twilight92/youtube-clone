import Video from "../models/Video";

export const home = async(req, res) => {
    try {
        // Video.find({}) => search terms(비어있으면 모든형식을 찾는다는걸 의미)
        // await는 database를 기다려줌
        const videos = await Video.find({});
        return res.render("home", { pageTitle: "Home", videos });
    } catch {
        return res.render("server-error");
    }
}
export const watch = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
console.log(video)

    if (!video) {
        return res.render("404", { pageTitle: "Video not found"});
    }

    return res.render("404", { pageTitle: "Video not found"});
}
export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", { pageTitle: `Editing:` });
}
export const postEdit = (req, res) => {
    const { id } = req.params; // const id = req.params.id;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title,
            description,
            hashtags: hashtags.split(",").map(word => `#${word}`),
        });
        return res.redirect("/");
    } catch(error) {
        return res.render("upload", { pageTitle: "Upload Video", errorMessage: error._message });
    }
};