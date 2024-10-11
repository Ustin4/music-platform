import React from 'react';
import MainLayouts from "@/layouts/MainLayouts";
import {Grid} from "@mui/system";
import {Button, Card} from "@mui/material";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";
import {ITrack} from "@/types/track";
import TrackItem from "@/components/TrackItem";
import TrackList from "@/components/TrackList";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {
            _id: '1',
            name: "трек 1",
            artist: 'Исполнитель 1',
            text: 'Какой то текст',
            listens: 5,
            audio: 'http://localhost5000/audio/3495.mp3',
            picture: "http://localhost:5000/image/avat.jpg",
            comments: []
        },
        {
            _id: '2',
            name: "трек 2",
            artist: 'Исполнитель 2',
            text: 'Какой то текст',
            listens: 5,
            audio: 'http://localhost5000/audio/3495.mp3',
            picture: "http://localhost:5000/image/avat.jpg",
            comments: []
        },
        {
            _id: '3',
            name: "трек 3",
            artist: 'Исполнитель 3',
            text: 'Какой то текст',
            listens: 5,
            audio: 'http://localhost5000/audio/3495.mp3',
            picture: "http://localhost:5000/image/avat.jpg",
            comments: []
        }
    ]
    return (
        <MainLayouts>
            <Grid container justifyContent='centre'>
                <Card style={{width: '100rem'}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Загрузить трек</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayouts>
    );
};

export default Index;