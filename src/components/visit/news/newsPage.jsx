import React, { Component } from 'react'
export default class newsPage extends Component {
    constructor(){
        super()
        this.pageArr=[]//页数的数组
    }
    //通过当前页面和最大页面返回应该显示的页数数组
    changePageUL(){
        let arr=[]
        if(this.props.pageNow<5||this.props.maxPage<=6){
            //输出[1,7]的数组
            for(let i=1;i<8;i++){
                arr.push(i)
            }
        }else if(this.props.pageNow>=this.props.maxPage-3){
            // 输出[最大页数-6,最大页数]的数组
            for(let i=this.props.maxPage-6;i<=this.props.maxPage;i++){
                arr.push(i)
            }
        }else{
            //输出[当前页数-3，当前页数+3]
            for(let i=this.props.pageNow-3;i<=this.props.pageNow+3;i++){
                arr.push(i)
            }
        }
        return arr
    }
    //选择到的页数，page表示应该跳转的页数
    selectPage(page){
        this.props.changePage(page)//调取父类组件的方法来修改当前页面
    }
    render() {
        this.pageArr=this.changePageUL()
        return (
            <ul className="Page">
                {
                    // 判断当前页数是否为1，为1则<无法点击
                    this.props.pageNow===1?
                    <li><div className="Previous noSelctPage">{"<"}</div></li>
                    :
                    //点击后显示的页面为当前页面-1
                    <li><div className="Previous" onClick={this.selectPage.bind(this,this.props.pageNow-1)}>{"<"}</div></li>
                }
                {
                    //判断当前页数是否小于5且最大页数是否为6，是则...无法点击
                    this.props.pageNow<5||this.props.maxPage===6?
                    <li><div className="More noSelctPage">{"..."}</div></li>
                    :
                    //点击后显示的页面为页面数组最小的页面-1
                    <li><div className="More" onClick={this.selectPage.bind(this,this.pageArr.slice(0).reverse().pop()-1)}>{"..."}</div></li>
                }
                {
                    this.pageArr.map((item,index)=>{
                        //判断是否为当前页面，是则加上当前页面的class
                        if(this.props.pageNow===item){
                            return(
                                //点击后跳转到当前点击的页面
                                <li key={index}><div className="PageNow" onClick={this.selectPage.bind(this,item)}>{item}</div></li>
                            )
                        }else{
                            //判断是否超过最大页面，超过则无法点击，未超过则可以点击
                            if(item>this.props.maxPage){
                                return(
                                    <li key={index}><div className="noSelctPage">{item}</div></li>
                                )
                            }else{
                                return(
                                    <li key={index}><div className="" onClick={this.selectPage.bind(this,item)}>{item}</div></li>
                                )
                            }
                        }
                    })
                }
                {
                    //判断最大页数是否小于等于页面数组的最后一个
                    this.props.maxPage<=this.pageArr.pop()?
                    <li><div className="More noSelctPage">{"..."}</div></li>
                    :
                    //点击后跳转的页面数组的最大数+2（按理应该为+1，但是失败了，原因懒得想了）
                    <li><div className="More" onClick={this.selectPage.bind(this,this.pageArr.pop()+2)}>{"..."}</div></li>
                }
                {
                    this.props.pageNow===this.props.maxPage?
                    <li><div className="Previous noSelctPage">{">"}</div></li>
                    :
                    //点击后跳转到当前页面-1
                    <li><div className="Previous" onClick={this.selectPage.bind(this,this.props.pageNow+1)}>{">"}</div></li>
                }
            </ul>
        )
    }
}
