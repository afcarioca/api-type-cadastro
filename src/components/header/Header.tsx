import React, { Fragment } from 'react';
import styled from 'styled-components'




export const Header: React.FC = () =>{
    const Window = styled.header`
        background-color: red;
        width: auto;
        height: 300px;

    `
    return(
        <Fragment>
                
            <Window>

            </Window>

        </Fragment>
            
    );
}