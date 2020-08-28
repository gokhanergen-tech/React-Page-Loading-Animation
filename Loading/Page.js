import React, { Component } from 'react'

export default class Page extends Component {
    state={
        light:0,
        width:window.innerWidth,
        height:window.innerHeight,
    }
    constructor(props){
        super(props);
        this.handleResize=this.handleResize.bind(this);
    }
    handleResize(){
        this.setState({height:window.innerHeight,width:window.innerWidth})
    }
    componentWillUnmount(){
       
        window.removeEventListener("resize",this.handleResize,false)
        clearInterval(this.start_animation);
    }
    componentDidMount(){

        window.addEventListener("resize",this.handleResize,false)
        this.counter=0;
        this.start_animation=setInterval(()=>{
             this.setState({light:++this.counter})
             if(this.counter===3){
                 this.counter=-1;
             }
         },500)

    }
    render() {
        return (
        <div id="loader" style={{height:this.state.height,width:this.state.width}} className="d-flex align-items-center loader">
            <div className=" align-self-center box d-flex flex-column m-auto">
               <div className="d-flex  flex-fill">
               <span  style={{width:"30%",margin:"auto",height:"100%",borderRadius:"50%",...(this.state.light===0?{backgroundColor:"yellow",boxShadow:"0 0 50px yellow"}:{backgroundColor:"white"})}}></span>
               </div>
               <div className="d-flex flex-fill">
               <span className="mr-auto"  style={{width:"30%",height:"100%",backgroundColor:"white",borderRadius:"50%",...(this.state.light===3?{backgroundColor:"black",boxShadow:"0 0 50px black"}:{backgroundColor:"white"})}}></span>

               <span  style={{width:"30%",height:"100%",backgroundColor:"white",borderRadius:"50%",...(this.state.light===1?{backgroundColor:"red",boxShadow:"0 0 50px red"}:{backgroundColor:"white"})}}></span>

               </div>
               <div className="d-flex flex-fill">
               <span  style={{width:"30%",margin:"auto",height:"100%",backgroundColor:"white",borderRadius:"50%",...(this.state.light===2?{backgroundColor:"skyblue",boxShadow:"0 0 50px skyblue"}:{backgroundColor:"white"})}}></span>
               </div>
            </div>
        </div>
        )
    }
}
