import MainLayouts from "@/layouts/MainLayouts";
import StepWrapper from "@/components/StepWrapper";
import {Grid} from "@mui/system";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import FileUpload from "@/components/FileUpload";

const Create = () => {

    const [audio, setAudio] = useState(null);
    const [picture, setPicture] = useState(null);

    const [activeStep, setActiveStep] = useState(0);

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(activeStep => activeStep + 1);

        }
    }
    const back = () => {
        setActiveStep(activeStep => activeStep - 1);
    }
    return (
        <MainLayouts>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={'column'} style={{padding: 20}}>
                        <TextField
                            style={{marginTop: 10}}
                            label={'Название трека'}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={'Имя исполнителя'}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={'Слова к треку'}
                            multiline
                            rows={3}

                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload accept={'image/*'} setFile={setPicture}>
                        <Button>Загрущите обложку</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload accept={'audio/*'} setFile={setAudio}>
                        <Button>Загрущите аудио</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button onClick={next}>Далее</Button>
            </Grid>
        </MainLayouts>
    );
};

export default Create;