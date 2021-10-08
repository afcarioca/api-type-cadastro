import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


export const Header: React.FC = () =>{
    const Window = styled.header`
        background-color: rgb(2, 9, 34);
        width: auto;
        height: 95px;

    `
    const Explorer = styled.nav`
        border: 3px solid red;
        padding: 10px;
        margin-top: 2px;
        
    `
    
    const List = styled.ul`
        border: 3px solid yellow;
        display: flex;
        flex-direction: row;
        padding: 6px;
        justify-content: space-around;


    `

    const Element = styled.li`
        color: white;
        list-style: none;

    `

    

    return(
        <Fragment>
            <Window>
                <Explorer>
                    <List>
                        <Element>
                            <Link to="/about">Trabalho</Link>
                        </Element>
                         <Element>
                            <Link to="/about">Odontologia</Link>
                        </Element>
                        <Element>
                            <Link to="/about">Universidade</Link>
                        </Element>
                    </List>
                </Explorer>
            </Window>
        </Fragment>
     );
}