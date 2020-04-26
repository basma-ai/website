import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: process.env.VUE_APP_CONTENT_API,
    key: 'c87ec18624217c0f0931b13e05',
    version: "v3"
});

export async function getPosts() {
    return await api.posts
        .browse({
            include: "tags,authors",
            limit: "all"
        })
        .catch(err => {
            console.error(err);
        });
}
