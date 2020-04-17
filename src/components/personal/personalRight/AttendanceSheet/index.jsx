import React, { Component } from 'react'
import './index.css'
export default class AttendanceSheet extends Component {
    constructor(){
        super()
        this.date=new Date();
        console.log(this.date)
        this.yera=this.date.getFullYear()
        this.month=this.date.getMonth()
        this.day=this.date.getDate()
        this.state={
            checkDay:9
        }
    }
    getSheetTitle(){
        return `${this.yera}年${this.month+1}月`
    }
    getSheerBody(){
        var count=1
        var bodyArr=[]
        var allDay = new Date(this.yera,this.month+1,0);
        allDay=allDay.getDate()
        var firstDay=new Date()
        firstDay.setDate(1)
        firstDay=firstDay.getDay()
        //为每行日期创建数组保存日期，然后再把行数组插入列数组内
        for(let i=0;i<5;i++){
            let arr=[]
            for(let j=0;j<7;j++){
                if(firstDay===0){//判断是否为星期天
                    arr.push(count)
                    count++
                    if(count>allDay){break}
                }else{
                    if(arr.length<firstDay&&i===0){//判断是否为第一次循环且为当月的第一天的前面插入空字符串
                        arr.push("")
                    }else{
                        arr.push(count)
                        count++
                        if(count>allDay){break}
                    }
                }
            }
            bodyArr.push(arr)
        }
        return bodyArr
    }
    render() {
        return (
            <div className='AttendanceSheet'>
                <p className="SheetTitle">{this.getSheetTitle.call(this)}</p>
                <div className="sheetTable">
                    <div className="SheetHead">
                        <div className="sheetTr">
                            <div className="SheetCell">日</div>
                            <div className="SheetCell">一</div>
                            <div className="SheetCell">二</div>
                            <div className="SheetCell">三</div>
                            <div className="SheetCell">四</div>
                            <div className="SheetCell">五</div>
                            <div className="SheetCell">六</div>
                        </div>
                    </div>
                    <div className="SheetBody">
                        {
                            this.getSheerBody().map((item1,index)=>{
                                return(
                                    <div className="sheetTr" key={index}>
                                        {
                                            item1.map((item2,index)=>{
                                                return(
                                                    item2?
                                                    <div className="SheetCell checkIn sheetDate" key={index}>{item2}</div>
                                                    :
                                                    <div className="SheetCell" key={index}>{item2}</div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <p className="sheetCheck">本月已签到{this.state.checkDay}天</p>
            </div>
        )
    }
}
