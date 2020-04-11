import React, { Component } from 'react'
export default class PreviousWebsiteItem extends Component {
    constructor(){
        super()
        this.yearArr=Array.from(Array(11).keys(),i=>i+2009)
        this.newItem=this.newItem.bind(this)
        this.LazyLoad=this.LazyLoad.bind(this)
        this.state={
            year:[]
        }
    }
    newItem(num){
        for(let i=0;i<num;i++){
            let arr=this.yearArr.pop()
            let year=this.state.year
            year.push(arr)
            this.setState({year})
        }
    }
    LazyLoad(){
        if(document.documentElement.scrollTop){
            if(document.documentElement.scrollTop>this.lasts.offsetTop-800&&this.yearArr.length !== 0)
                this.newItem(2)
        }else if(document.body.scrollTop){
            if(document.body.scrollTop>this.lasts.offsetTop-800&&this.yearArr.length !== 0)
                this.newItem(2)
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.LazyLoad);
        this.newItem(3)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.LazyLoad);
    }
    render() {
        return (
            <div className="PreviousWebsiteItem-outer">
                <button onClick={()=>{window.removeEventListener('scroll',this.LazyLoad);}}>1111</button>
                {
                    this.state.year.map((item,index)=>{
                        return(
                            <div className="PreviousWebsite-item" key={index}>
                                <img src={require(`./websit/${item}.png`)} className="PreviousWebsiteItem-img" alt=""/>
                                <div className="PreviousWebsite-item-words">{item}</div>
                            </div>
                        )
                    })
                }
                <div className="PreviousWebsite-item-last" ref={dom=>this.lasts=dom}>没有更多了~~</div> 
            </div>
        )
    }
}
