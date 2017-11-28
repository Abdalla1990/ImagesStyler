import React from 'react';

const SelectedOptions = (props) =>(
    
           <div>
    
            <div className="option"> 
                 <p onDoubleClick = {() => {props.onDoubleClickHandler(props.text)}}>{(props.selected === true) && props.text}</p>        
             </div>
            
           </div>
         )
       
     
     export default SelectedOptions ;