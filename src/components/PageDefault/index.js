import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled from  'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%; 
    padding-right: 5%; 
`;


function PageDefault({ children }) { // props
    return (
        <>
            <Menu />
            <Main>
<<<<<<< HEAD
                {children}
=======
            {children}
>>>>>>> bf2cdf1fc64e3fd091207a553d94714d1f541573
            </Main>
            <Footer />
        </>
       
    );
}

export  default PageDefault;