function Video({ src, ...props }) {
    return <video src={src} {...props}></video>;
}

export default Video;
