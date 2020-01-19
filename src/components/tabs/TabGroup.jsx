import React from 'react';
import {StyledTab} from './style'; 
import Tab from './Tab'; 

const TabGroup = () => {
    return (
       <StyledTab> 
       <Tab type="radio"  id ="flight" name= "flight" label="Flight"></Tab>
       <Tab type="radio"  id ="info"   name= "flight" label="Info"> </Tab> 
       <Tab type="radio"  id ="maps"   name= "flight" label="Maps"> </Tab>       
       </StyledTab>
    );
}

export default TabGroup;
