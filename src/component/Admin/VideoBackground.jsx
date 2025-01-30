import React from 'react';

const VideoBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
            <video className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2" autoPlay loop muted>
                <source src="/assests/video/admin.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;