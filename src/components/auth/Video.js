import React from 'react';
import video from '../../assets/video.mp4';
import poster from '../../assets/poster.png';

export const Video = () => {
    return (
        <video id="video" poster={poster} autoPlay muted loop>
            <source src={video} type="video/mp4" />
        </video>
    )
}
