import React from 'react';
import {ITrack} from "@/types/track";
import MainLayouts from "@/layouts/MainLayouts";
import {Button, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {Grid} from "@mui/system";

const TrackPage = () => {
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
    const router = useRouter();
    return (
        <MainLayouts>
            <Button
                variant={'outlined'}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200} alt="photo"/>
                <div style={{margin: '20px 0'}}>
                    <h1>Название - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Словаа к треку </h1>
            <p>{track.text}</p>
            <h1>Коментарии</h1>
            <Grid>
                <TextField
                    label='Ваше имя'
                    fullWidth
                />
                <TextField
                    label='Коментарий'
                    fullWidth
                    multiline
                    rows={4}
                />
                <button>Отправить</button>
            </Grid>
            <div>
                {track.comments.map((comments, i) =>
                    <div>
                        <div>Автор - {comments.userName}</div>
                        <div>Комментарий - {comments.text}</div>
                    </div>
                )}
            </div>
        </MainLayouts>
    );
};

export default TrackPage;