import { ask_riddle } from "./ask_riddle.js"
import { get_input } from "../function_help/get_input.js"
import { cehck_ansher } from "./cehck_ansher.js"

export function riddle_game(riddle){

    let running = true

    while (running){

        ask_riddle(riddle)
        let anser = get_input()
        
        if (cehck_ansher(riddle,anser)){

            console.log("correct anser");
            running = false
        }
        else{
            console.log("rong anser");
            
        }
    }


}








