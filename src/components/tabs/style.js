import styled from 'styled-components'; 


export const StyledTab = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 1%; 
    align-items: center;
    justify-content: center;
    border:solid 1px darkgray; 
`


export const InputItem = styled.input`
 display: none;
 font-weight: 900;
 width: 100%;
 border:solid 1px red;
 color:blue;
`

export const InputLabel = styled.label `
    order: -1;
    font-weight: 900;
    display: inline-block;
    background-color: gray;
    text-align: center;
    cursor: pointer;
    color: rgb(250, 195, 43);
    padding: 0.5em;
    border-right: 1px solid white;
    flex: auto;

    @media(max-width:781px){
            flex: 1 1 100%; 
            order:0;    
        }; 
`

export const TabContent = styled.div `
    padding: 1%;
    background-color: rgb(230, 230, 230);
    display: none;
    width: 100%; 
`

