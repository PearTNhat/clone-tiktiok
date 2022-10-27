import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
const cx = classNames.bind();
let wasPaused = true;
function useVideoPlayer(videoElement) {
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        isMuted: false,
    });
    let [isScrubbing, setIsScrubbing] = useState(false);
    //handleTime
    function formatTime(value) {
        const sValue = value.toString();
        if (sValue.length === 1) {
            return `0${sValue}`;
        }
        if (sValue.length === 2) {
            return sValue;
        }
    }
    function handleTime(time) {
        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60) % 60;
        const hours = Math.floor(time / 3600);
        if (hours === 0) {
            return `${formatTime(minutes)}:${formatTime(seconds)}`;
        } else {
            return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
                seconds,
            )}`;
        }
    }

    // play
    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        });
    };
    useEffect(() => {
        if (videoElement === null) return;
        // console.log(playerState);
        playerState.isPlaying ? videoElement.play() : videoElement.pause();
    }, [playerState.isPlaying]);
    // mute
    const toggleMute = () => {
        setPlayerState({
            ...playerState,
            isMuted: !playerState.isMuted,
        });
    };
    useEffect(() => {
        if (videoElement === null) return;
        videoElement.muted = playerState.isMuted ? true : false;
    }, [playerState.isMuted, videoElement]);
    //toggle Scrubbing
    const toggleScrubbingProgress = (e, { refTimeLine, videoElement }) =>
        // refTimeLine dùng để add progress
        {
            const rect = refTimeLine.getBoundingClientRect();
            const percent =
                Math.min(e.clientX - rect.x, rect.width) / rect.width;
            isScrubbing = e.buttons === 1;

            setIsScrubbing((pre) => {
                return !pre;
            });
            if (isScrubbing) {
                wasPaused = videoElement.paused;
                videoElement.pause();
            } else if (e.buttons === 0) {
                refTimeLine.style.setProperty('--progress', percent);
                videoElement.currentTime = Math.floor(
                    percent * videoElement.duration,
                );
                if (!wasPaused) {
                    videoElement.play();
                }
            }
        };
    return {
        playerState,
        isScrubbing,
        togglePlay,
        toggleMute,
        toggleScrubbingProgress,
        handleTime,
    };
}
export default useVideoPlayer;
