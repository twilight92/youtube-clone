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

    if (!video) {
        return res.render("404", { pageTitle: "Video not found"});
    }

    return res.render("watch", { pageTitle: video.title, video });
}
export const getEdit = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);

    if (!video) {
        return res.render("404", { pageTitle: "Video not found"});
    }

    return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
}
export const postEdit = async (req, res) => {
    const { id } = req.params; // const id = req.params.id;
    const {title, description, hashtags } = req.body;
    const video = await Video.findById(id);

    if (!video) {
        return res.render("404", { pageTitle: "Video not found"});
    }

    video.title = title;
    video.description = description;
    video.hashtags = hashtags.split(",").map(word => word.startsWith('#') ? word : `#${word}`);
    await video.save();
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