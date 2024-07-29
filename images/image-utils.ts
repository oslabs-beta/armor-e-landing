function getImageURL(name: String) {
    return new URL(`../assets/${name}`, import.meta.url).href
}
export {getImageURL};