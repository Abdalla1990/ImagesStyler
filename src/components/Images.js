import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import SelectOptions from './SelectOptions'
import SelectedOptions from './SelectedOptions'
class Images extends React.Component{

    constructor (props){
        super(props);
        this.state={
            file:undefined,
            
            options:[
              {text :'Rotate' , selected : false}
            , {text :'Translate' , selected : false} 
            , {text :'Scale' , selected : false} 
            , {text :'Opacity' , selected : false}
                    ]
            ,
            style:''
            
            
    }
        this.OnClickHandler = this.OnClickHandler.bind(this);
        this.onDoubleClickHandler = this.onDoubleClickHandler.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
        this.OnResetHandler= this.OnResetHandler.bind(this);
    }
    
    onDoubleClickHandler(text){


        let  theOption= this.state.options.filter((op)=>{
                return op.text === text
        })

        theOption[0].selected = !theOption[0].selected ;
 
 
        this.setState((pre) => {
           return  this.state.options.filter((op)=>{
                if (op.text === text){
                   let selected = !op.selected
                    return selected
                }
            })
            
            
            });
            
    this.changeStyle(theOption[0].text);
    }
    

    changeStyle (text){
      
       
           let theOPtionsSelected= this.state.options.filter((option) => {
              return option.selected ? option.text : ''
            })
    this.setState((prev)=>{
       
       let  textSelected =theOPtionsSelected.map((op)=>{
            return '_'+op.text
        })
        
    
        console.log('you slected : ',textSelected);
       
        if(textSelected.length>0)
        {let arrayjoined=''; arrayjoined += textSelected.join('')
        console.log('you slected : ',arrayjoined);
        return {
            style:arrayjoined
        }}
        else{
            return {
                style:''
            }
        }
})
    }
    OnClickHandler(){
        if(this.state.file){
            this.setState(()=>{
                return{
                    file:undefined,
                    style:'',
                    options:[
                        {text :'Rotate' , selected : false}
                      , {text :'Translate' , selected : false} 
                      , {text :'Scale' , selected : false} 
                      , {text :'Opacity' , selected : false}
                              ]
                }
            })
        }
    }
    OnResetHandler(){
        if(this.state.style){
            this.setState((prev)=>{
                
                return{

                    style:'',
                    options:[
                        {text :'Rotate' , selected : false}
                      , {text :'Translate' , selected : false} 
                      , {text :'Scale' , selected : false} 
                      , {text :'Opacity' , selected : false}
                              ]
                }
            }
        )
    }
    
}
     onDrop(acceptedFiles, rejectedFiles) {
       if(acceptedFiles){
         
           this.setState(() => {
               return {
                   file : acceptedFiles[0].preview,
                   
               }
           })
       }
      }
    render(){
        console.log('the state : ',this.state);
        let options = this.state.options;
        if(this.state.file){
            return (

                
                <div>

                    <div className="container">
                    
                    
                    <div className="image-container">  <img 
                    
                    className={this.state.style ? this.state.style : "image"} src={this.state.file} /></div>
                    
                    <div className="widget">
                    <div className="info">  <p>Double click to choose or cancel an option</p>
                    <button className="button" onClick={this.OnClickHandler}>Go Back</button>
                    <button className="button" onClick={this.OnResetHandler}>Reset</button>
                    </div>
                   
                        <div className="selectOption">
                            
                            <h3> Select An Option </h3>
                            {options.map((op,index)=> (
                                <SelectOptions 
                            key = {index} 
                            text = {op.text} 
                            selected={op.selected}
                            onDoubleClickHandler = {this.onDoubleClickHandler}
                            
                                />
                            ))}
                        </div>
                        <div className="selectedOption">
                            <h3> Selected Option </h3>
                            {options.map((op,index)=> (
                                <SelectedOptions 
                            key = {index} 
                            text = {op.text} 
                            selected={op.selected}
                            onDoubleClickHandler = {this.onDoubleClickHandler}
                            
                                />
                            ))}
                        </div>
                    </div>
                    
                    
                    
                   
                    </div>
              

                
                </div>
            )
        }else { return (
            
            <div>
                <div className="container">
                    <h1>Choose An Image To Start</h1>
                    <Dropzone className="drag" accept="image/*" onDrop={(file) => this.onDrop(file)}>
                    <h1 >Try dropping some file here, or click to select file to upload.</h1>
                    </Dropzone>
                </div>
            
            
            </div>
        )}
       
           
    }
}

 export default Images