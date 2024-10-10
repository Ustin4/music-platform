import React from 'react';
import MainLayouts from "@/layouts/MainLayouts";
import {Grid} from "@mui/system";
import {Button, Card} from "@mui/material";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter()
    return (
        <MainLayouts>
            <Grid container justifyContent='centre'>
                <Card style={{width: '100rem'}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={()=> router.push('/tracks/create')}>Загрузить трек</Button>
                        </Grid>
                    </Box>

                </Card>
            </Grid>
        </MainLayouts>
    );
};

export default Index;