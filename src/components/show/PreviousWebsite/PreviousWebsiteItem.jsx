import React, { Component } from 'react'
export default class PreviousWebsiteItem extends Component {
    constructor(){
        super()
        this.yearArr=Array.from(Array(11).keys(),i=>i+2009)
        // this.year=this.yearArr.pop()
    }
    newItem(num){
        let arr=[]
        for(let i=0;i<num;i++){
            let year=this.yearArr.pop()
            arr.push(year)
        }
        return arr
    }

    render() {
        return (
            <div className="PreviousWebsiteItem-outer">
                {
                    this.newItem(11).map((item,index)=>{
                        return(
                            <div className="PreviousWebsite-item" key={index}>
                                <img src={require(`./websit/${item}.png`)} className="PreviousWebsiteItem-img" alt=""/>
                                <div className="PreviousWebsite-item-words">{item}</div>
                            </div>
                        )
                    })
                }
                <div className="PreviousWebsite-item-last">没有更多了~~</div> 
            </div>
        )
    }
}
