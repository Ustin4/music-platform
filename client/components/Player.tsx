import React from 'react';
import IconButton from "@mui/material/IconButton";
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import style from '../styles/Player.module.scss'
import {ITrack} from "@/types/track";
import {Grid} from "@mui/system";
import TrackProgress from "@/components/TrackProgress";

const Player = () => {
    const active = false
    const track: ITrack = {
        _id: '1',
        name: "трек 1",
        artist: 'Исполнитель 1',
        text: 'Какой то текст',
        listens: 5,
        audio: 'http://localhost5000/audio/3495.mp3',
        picture: "http://localhost:5000/image/avat.jpg",
        comments: []
    }

    return (
        <div className={style.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'grey'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {
            }}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => {
            }}/>

        </div>
    );
};

export default Player;