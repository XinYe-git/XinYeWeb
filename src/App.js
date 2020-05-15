import React, { Component } from 'react'
import Router from './router'
import axios from "axios"
export const defaultsImg='/api'
export default class App extends Component {
    constructor(){
        super()
        axios.defaults.baseURL = '/api'
        axios.defaults.withCredentials=true
        axios.defaults.crossDomain=true
        Component.prototype.defaultsImg=defaultsImg
    }
    render() {
        return (
            <>
              <Router></Router>
            </>
        )
    }
}