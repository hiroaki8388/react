import React from 'react'
import ReactDOM from 'react-dom'
import Hello, { Greeting } from './Hello'




ReactDOM.render(

    <Greeting>
    <Hello name={"坂本龍馬"}/>
    <Hello name={"西郷隆盛"}/>
    </Greeting>,
    document.getElementById('root')
)

