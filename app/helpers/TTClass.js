class TestTailTest{
    constructor(visualTimerElementID= "visual-timer", numberOfQuestions=10, amountOfTimeInSeconds=10){
        this.numberOfQuestions = numberOfQuestions
        this.amountOfTimeInSeconds = amountOfTimeInSeconds
        this.paused = false
        this.started = false
        this.visualTimerElementID = visualTimerElementID
        this.visualTimerElement = $(`#${this.visualTimerElementID}`)
        this.log = (thing) => console.log.call(`[TestTail] ${thing}`)
    }
    timer = {
        setSections: (arrayOfNumbers) => {
            arrayOfNumbers.forEach((section, index) => {
                var numbs = section.split(" ")
                numbs.forEach((num) => {
                    this.log(`Recieved call to add number ${num} to section ${index+1}!`)
                })
                
            })
        },
        start:  () => {
            this.log("Recieved call to start timer!")
        },
        pause:  () => {
            this.log("Recieved call to pause timer!")
        },
        end:  () => {
            this.log("Recieved call to end timer!")
        },
    }
}


export default TestTailTest;