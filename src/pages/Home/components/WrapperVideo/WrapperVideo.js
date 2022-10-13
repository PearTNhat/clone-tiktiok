import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
//
import styles from './WrapperVideo.module.scss';
import useVideoPlayer, { isScrubbing } from '~/hooks/useVideoPlayer';
import { VolumeHightIcon, VolumeMutedIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
export let isScrubbingVolume = false;
function WrapperVideo({ data }) {
    // const [isScrubbing, setIsScrubbing] = useState(false);
    const refVideo = useRef(null);
    const refVolume = useRef();
    const currentTimeElmt = useRef();
    const durationElmt = useRef();
    const volumeContainer = useRef();
    const refTimeLine = useRef();
    const refControlContainer = useRef();
    const {
        playerState,
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
        currentTimeElmt.current.textContent = handleTime(
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
                refControlContainer: refControlContainer.current,
            });
        }
        if (isScrubbingVolume) {
            handleAdjustVolume(e);
        }
    };
    const handleMouseMoveDoc = (e) => {
        if (isScrubbing) {
            e.preventDefault();
            handleUpdateTimeline(e);
        }
        if (isScrubbingVolume) {
            e.preventDefault();
            handleAdjustVolume(e);
        }
    };
    const handleAdjustVolume = (e) => {
        const rect = refVolume.current.getBoundingClientRect();
        isScrubbingVolume = e.buttons === 1;
        volumeContainer.current.classList.toggle(
            cx('scrubbingVolume'),
            isScrubbingVolume,
        );
        const percent =
            1 -
            Math.min(Math.max(e.clientY - rect.y, 0), rect.height) /
                rect.height;
        refVolume.current.style.setProperty('--progress', percent);
        refVideo.current.volume = percent;
        if (percent === 0 && playerState.isMuted === false) toggleMute();
        if (playerState.isMuted === true && percent !== 0) {
            toggleMute();
        }
    };
    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUpDoc);
        document.addEventListener('mousemove', handleMouseMoveDoc);
        return () => {
            document.removeEventListener('mouseup', handleMouseUpDoc);
            document.removeEventListener('mousemove', handleMouseMoveDoc);
        };
    });
    useEffect(() => {
        let volume = refVideo.current.volume;
        if (playerState.isMuted) {
            volume = 0;
        }
        refVolume.current.style.setProperty('--progress', volume);
    }, []);
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
                    console.log(durationElmt.current.textContent);
                }}
                onTimeUpdate={handleTimeUpDate}
            ></video>
            <div ref={refControlContainer} className={cx('controls-container')}>
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
                                    handleAdjustVolume(e);
                                }}
                                ref={refVolume}
                                className={cx('process-volume')}
                            ></div>
                        </div>
                        <div className={cx('volume-icon')} onClick={toggleMute}>
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
                            onMouseDown={(e) =>
                                toggleScrubbingProgress(e, {
                                    refTimeLine: refTimeLine.current,
                                    refControlContainer:
                                        refControlContainer.current,
                                })
                            }
                            className={cx('time-line')}
                        ></div>
                    </div>
                    {/* time */}
                    <div className={cx('time-video')}>
                        <span
                            ref={currentTimeElmt}
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
