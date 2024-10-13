import React from 'react';

interface ITrackProgress {
    left: number;
    right: number;
    onChange: (e: React.ChangeEvent) => void;
}

const TrackProgress: React.FC<ITrackProgress> = ({onChange, right, left}) => {
    return (
        <div style={{display: 'flex'}}>
            <input
                type={'range'}
                min={left}
                max={right}
                value={left}
                onChange={onChange}/>
            <div>{left}/{right}</div>
        </div>
    );
};

export default TrackProgress;