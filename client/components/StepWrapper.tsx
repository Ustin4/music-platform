import React from 'react';
import Container from "@mui/material/Container";
import {Card, Step, StepLabel, Stepper} from "@mui/material";
import {Grid} from "@mui/system";

interface Props {
    activeStep: number;
    children: React.ReactNode;
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите сам трек']
const StepWrapper: React.FC<Props> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, i) =>
                    <Step
                        key={i}
                        completed={activeStep > i}
                    >

                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" style={{margin: '70px 0', height: 270}}>
                <Card style={{width:600}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;