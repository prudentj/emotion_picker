import React from 'react';
import { useState } from 'react';
import emotionMatrix from "./emotionMatrixIdea"
import "./EmotionPicker.css"
function EmotionPicker(props) {
    // 0 = Null, 1 = Anticipation, 2 = Surprise, 3 = Confusion
    const expectArr = ["😑 No Expectation","🧐 Anticipation","😲 Surprise","😕 Confusion"]
    const [expectation, setExpectation] = useState(0)
    // 0 = Null, 1 = Anger, 2 = Fear, 3 = Paralysis
    //const threatArr = ["🙂 Safe","😡 Anger","😨 Fear","🥶 Paralysis"]
    const threatArr = ["🙏 Safe","🏹 Fight","💨 Flea","🥶 Freeze"]
    const [threat, setThreat] = useState(0)
    // 0 = Null, 1 = Disgust, 2 = Reverence (beauty), or 3 = Ambivalence?
    //const judgeArr = ["🙂 Impartial","🤢 Disgust", "😇 Reverent", "😐 Flawed"]
    const judgeArr = ["😑 Impartial","👿 Profane", "😇 Elevation", "🤨 Grotesque"]
    const [judgment, setJudgement] = useState(0)
    //0 = Null, 1 = Joy, 2 = Sadness, 3 = Bittersweet
    const contentArr = ["🙂 Calm","😃 Joy", "😭Sad" ,"😥Bittersweet"] //There isn't a smiling with a tear emoji on windows
    const [contentment, setContentment] = useState(0)

    const toggleEmotion = (emotionNum,setEmotionNum) => {
        emotionNum === 3 ? setEmotionNum(0) : setEmotionNum(emotionNum+1)
    }
    const emotion = emotionMatrix[expectation][threat][judgment][contentment]
    const getEmotion = (expectation, threat, judgment, contentment) =>{
        const emotion = emotionMatrix[expectation][threat][judgment][contentment]
        const icon = emotion.icon === "unknown"?"?":emotion.icon
        return<p>{icon} {emotion.name}</p>
    }
    const icon = emotion.icon === "unknown"?"?":emotion.icon
    const output = <div>
        <h2>{icon} {emotion.name}</h2>
    </div>
    const getAdjacentNumArr = (num) => {
        const test = [0,1,2,3]
        return test.filter((n)=>{
            return n!==num
        })
        
        // if(num===0){
        //     return [1,2]
        // }
        // if(num===1){
        //     return [0,3]
        // }
        // if(num===2){
        //     return [0,3]
        // }
        // if(num===3){
        //     return [0,3]
        // }
        // return []
    }
    // const getComponents = (num) =>{
    //     //Not sure if this is getting everthing
    //     if (num === 3){
    //         return [0,1,2]
    //     }
    //     if(num === 2){
    //         return [0]
    //     }
    //     if(num === 1){
    //         return [0]
    //     }
    //     if(num === 0){
    //         return []
    //     }
    // }
    // const getElements = () => {
    //     let testArray = []
        

    // }
    
    return (
        <div>
            {output}
            <div className={"buttonRow"}>
                <div className={"buttonCol"}>
                    <button 
                            className={"emotionButton"}
                            onClick = {
                            ()=>{toggleEmotion(expectation,setExpectation)}
                            }
                        >
                                {expectArr[expectation]}
                    </button>
                </div>
                <div className={"buttonCol"}>
                    <button
                            className={"emotionButton"}
                            onClick = {
                                ()=>{toggleEmotion(threat,setThreat)}
                                }
                        >
                            {threatArr[threat]}
                        </button>
                </div>
                <div className={"buttonCol"}>
                    <button
                            className={"emotionButton"}
                            onClick = {
                                ()=>{toggleEmotion(judgment,setJudgement)}
                                }
                        >
                            {judgeArr[judgment]}
                        </button>
                </div>
                <div className={"buttonCol"}>
                    <button
                            className={"emotionButton"}
                            onClick = {
                                ()=>{toggleEmotion(contentment,setContentment)}
                                }
                        >
                            {contentArr[contentment]}
                    </button>
                </div>
            </div>
            <h2>Adjacent To {icon} {emotion.name}</h2>
            <div className={"buttonRow"}>
              
                <div className={"buttonCol"}>
                    {getAdjacentNumArr(expectation).map((num) => {
                        return getEmotion(num, threat, judgment, contentment)
                    })}
                </div>
                <div className={"buttonCol"}>
                   
                    {/* <p>Adjacent</p> */}
                    {getAdjacentNumArr(threat).map((num) => {
                        return getEmotion(expectation, num, judgment, contentment)
                    })}
                </div>
                <div className={"buttonCol"}>
                   
                    {/* <p>Adjacent</p> */}
                    {getAdjacentNumArr(judgment).map((num) => {
                        return getEmotion(expectation, threat, num, contentment)
                    })}
                </div>
                <div className={"buttonCol"}>
                   
                    {/* <p>Adjacent</p> */}
                    {getAdjacentNumArr(contentment).map((num) => {
                        return getEmotion(expectation, threat, judgment, num)
                    })}
                </div>
            </div>
            {/* <h2 className={"adjacies"}>Composites of {icon} {emotion.name}</h2> */}
            {/* Singles */}
            {/* If somethings is made of multiple components it will list all the components */}
            {/* Preferably From Complext to Simple */}
            {/* Without Each of the Constiuents */}
            {/* If it contains joy have a colum minus Joy */}
            {/* If the number is 1 or  */}
            {/* Duels */}
            {/* Triads */}
            {/* Quads */}
        </div>
    );
}

export default EmotionPicker;