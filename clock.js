class Clock{ 
    constructor(){
        this.hours = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.seconds = new Date().getSeconds();
        this.printTime();
        setInterval(this.tick.bind(this), 1000);
        //setInterval(Callback, interval)
    }
    printTime() {
        let time = `${this.hours}:${this.minutes}:${this.seconds}`
        console.log(time);
    }

    tick(){
        this.seconds += 1; 
        if(this.seconds === 60){
            this.seconds = 0; 
            this.minutes += 1;
        }
        else if(this.minutes === 60){
            this.hours += 1;
            this.minutes = 0;
        }
        else if(this.hours === 24){
            this.hours = 0;
        }
        this.printTime()
    }
    
}
 
const clock = new Clock();