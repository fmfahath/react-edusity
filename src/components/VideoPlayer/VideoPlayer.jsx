import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'

const VideoPlayer = ({ showVideo, setShowVideo }) => {

    const videoPlayer = useRef();

    const closePlayer = (e) => {
        if (e.target === videoPlayer.current) {
            setShowVideo(false)
        }
    }
    return (
        <div className={`video-player ${showVideo ? '' : 'hide'} `} ref={videoPlayer} onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer