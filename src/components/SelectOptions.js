import React from 'react';

const SelectOptions = (props) =>(
    
           <div>
         
              <div className="option"> 
                  <p onDoubleClick = {() => {props.onDoubleClickHandler(props.text)}}>{(props.selected === false) && props.text}</p>   
            </div>
     
           </div>
         )
       
     
     export default SelectOptions ;