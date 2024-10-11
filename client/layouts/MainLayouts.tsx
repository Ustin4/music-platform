import React from 'react';
import Navbar from "@/components/Navbar";
import Container from '@mui/material/Container';

interface MainLayoutsProps {
    children: React.ReactNode;
}

const MainLayouts: React.FC<MainLayoutsProps> = ({children}) => {

    return (
        <>
            <Navbar/>
            <Container style={{margin : '0px 10rem'}}>
                {children}
            </Container>
        </>
    );
};

export default MainLayouts