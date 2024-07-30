import definePlugin from "@utils/types";

export default definePlugin({
    name: "EmojiOnMouseUp",
    description: "Sends the emoji you are hovering when you take your mouse button up.",
    authors: [
        {
            name: "sadan",
            id: 521819891141967883n
        }
    ],
    patches: [
        {
    find: "ENTER)&&(null",
    replacement: {
        match: /{onClick:(\i),/,
        replace: "$&onMouseUp:$1,"
    }
}
    ]
})
