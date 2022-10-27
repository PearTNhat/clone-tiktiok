import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
//
import styles from './WrapperVideo.module.scss';
import useVideoPlayer from '~/hooks/useVideoPlayer';
import { VolumeHightIcon, VolumeMutedIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
export let isScrubbingVolume = false;
function WrapperVideo({ data }) {
    const [check, setCheck] = useState(false);
    const refVideo = useRef(null);
    const refVolume = useRef();
    const currentTimeElemt = useRef();
    const durationElmt = useRef();
    const volumeContainer = useRef();
    const refTimeLine = useRef();
    const refControlContainer = useRef();
    const {
        playerState,
        isScrubbing,
        togglePlay,
        toggleMute,
        toggleScrubbingProgress,
        handleTime,
    } = useVideoPlayer(refVideo.current);

    const [ratoVideo] = useState(() => data.width / data.height);

    const handleTimeUpDate = () => {
        const progress =
            refVideo.current.currentTime / refVideo.current.duration;
        refTimeLine.current.style.setProperty('--progress', progress);
        currentTimeElemt.current.textContent = handleTime(
            refVideo.current.currentTime,
        );
        if (refVideo.current.currentTime === refVideo.current.duration) {
            togglePlay();
            refTimeLine.current.style.setProperty('--progress', 0);
        }
    };
    const handleUpdateTimeline = (e) => {
        const rect = refTimeLine.current.getBoundingClientRect();
        const percent = Math.min(e.clientX - rect.x, rect.width) / rect.width;
        refTimeLine.current.style.setProperty('--progress', percent);
        refVideo.current.currentTime = percent * refVideo.current.duration;
    };
    const handleMouseUpDoc = (e) => {
        if (isScrubbing) {
            toggleScrubbingProgress(e, {
                refTimeLine: refTimeLine.current,
                videoElement: refVideo.current,
            });
        }
        if (isScrubbingVolume) {
            toggleScrubbingVolume(e);
        }
        document.removeEventListener('mousemove', handleMouseMoveDoc);
        document.removeEventListener('mouseup', handleMouseUpDoc);
    };
    function handleMouseMoveDoc(e) {
        if (isScrubbing) {
            e.preventDefault();
            handleUpdateTimeline(e);
        }
        if (isScrubbingVolume) {
            e.preventDefault();
            handleAdjustVolume(e);
        }
    }
    const toggleScrubbingVolume = (e) => {
        isScrubbingVolume = e.buttons === 1;
        volumeContainer.current.classList.toggle(
            cx('scrubbingVolume'),
            isScrubbingVolume,
        );
    };
    const handleAdjustVolume = (e) => {
        const rect = refVolume.current.getBoundingClientRect();
        const percent =
            1 -
            Math.min(Math.max(e.clientY - rect.y, 0), rect.height) /
                rect.height;
        refVolume.current.style.setProperty('--progress', percent);
        refVideo.current.volume = percent;
        if (percent === 0 && playerState.isMuted === false) {
            toggleMute();
        }
        if (playerState.isMuted && percent !== 0) {
            toggleMute();
        }
    };
    const handleAddEventDoc = () => {
        document.addEventListener('mousemove', handleMouseMoveDoc);
    };
    // remove doc scrubbing volume
    useEffect(() => {
        if (check && (isScrubbingVolume || isScrubbing)) {
            document.addEventListener('mousemove', handleMouseMoveDoc);
            document.addEventListener('mouseup', handleMouseUpDoc);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMoveDoc);
            document.removeEventListener('mouseup', handleMouseUpDoc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [check, playerState.isMuted, isScrubbing]);
    useEffect(() => {
        let volume = refVideo.current.volume;
        if (playerState.isMuted) {
            volume = 0;
        }
        refVolume.current.style.setProperty('--progress', volume);
    }, [playerState.isMuted]);

    return (
        <div
            className={cx('container')}
            style={{
                width: ratoVideo > 1 ? `${styles.sizeVideo}` : '',
                height: ratoVideo < 1 ? `${styles.sizeVideo}` : '',
            }}
        >
            <video
                ref={refVideo}
                className={cx('video')}
                src={data.video}
                onClick={togglePlay}
                onDurationChange={() => {
                    durationElmt.current.textContent = handleTime(
                        refVideo.current.duration,
                    );
                }}
                onTimeUpdate={handleTimeUpDate}
            ></video>
            <div
                ref={refControlContainer}
                className={cx('controls-container', {
                    scrubbing: isScrubbing,
                })}
            >
                <div className={cx('play-mute-volume')}>
                    <div className={cx('play-mute')}>
                        {playerState.isPlaying ? (
                            <FontAwesomeIcon
                                onClick={togglePlay}
                                icon={faPause}
                                className={cx('play-pause-icon')}
                            />
                        ) : (
                            <FontAwesomeIcon
                                onClick={togglePlay}
                                icon={faPlay}
                                className={cx('play-pause-icon')}
                            />
                        )}
                    </div>
                    <div
                        ref={volumeContainer}
                        className={cx('volume-container')}
                    >
                        <div className={cx('overlay')}>
                            <div
                                onMouseDown={(e) => {
                                    setCheck(true);
                                    handleAdjustVolume(e, playerState);
                                    toggleScrubbingVolume(e);
                                    document.addEventListener(
                                        'mouseup',
                                        handleMouseUpDoc,
                                    );
                                    handleAddEventDoc();
                                }}
                                ref={refVolume}
                                className={cx('process-volume')}
                            ></div>
                        </div>
                        <div
                            className={cx('volume-icon')}
                            onClick={(e) => {
                                if (refVideo.current.volume === 0)
                                    refVideo.current.volume = 1;
                                toggleMute();
                            }}
                        >
                            {playerState.isMuted ? (
                                <VolumeMutedIcon />
                            ) : (
                                <VolumeHightIcon />
                            )}
                        </div>
                    </div>
                </div>
                {/* TIMELINE and TIME VIDEO */}
                <div className={cx('time-lime-time-video')}>
                    <div className={cx('time-line-container')}>
                        <div
                            ref={refTimeLine}
                            onMouseDown={(e) => {
                                handleAddEventDoc();
                                document.addEventListener(
                                    'mouseup',
                                    handleMouseUpDoc,
                                );
                                setCheck(true);
                                toggleScrubbingProgress(e, {
                                    refTimeLine: refTimeLine.current,
                                    videoElement: refVideo.current,
                                });
                            }}
                            className={cx('time-line')}
                        ></div>
                    </div>
                    {/* time */}
                    <div className={cx('time-video')}>
                        <span
                            ref={currentTimeElemt}
                            className={cx('current-time')}
                        >
                            00:00
                        </span>
                        /
                        <span ref={durationElmt} className={cx('duration')}>
                            00:00
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WrapperVideo;
