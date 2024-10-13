import React from 'react';
import {ITrack} from "@/types/track";
import {Card} from "@mui/material";
import styles from '../styles/TrackItem.module.scss'
import IconButton from "@mui/material/IconButton";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {Grid} from "@mui/system";
import {useRouter} from "next/router";

interface Props {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<Props> = ({track, active = false}) => {
    const router = useRouter();

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <img width={70} height={70} src={track.picture}/>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'grey'}}>{track.artist}</div>
            </Grid>
            {active && <div>02:41 / 03:22</div>}
            <IconButton style={{marginLeft: 'auto'}} onClick={e => e.stopPropagation()}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;