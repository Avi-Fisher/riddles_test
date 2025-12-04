import { get_input } from "./function_help/get_input.js";
import { riddle_game } from "./game/game.js";
import { create_player } from "./player/create_player.js";
import  riddels  from "./riddles/all_riddels.js"
import { add_time } from "./time/add_solve_time.js";
import { Time_calculation } from "./time/decrotor_time.js";
import { show_status } from "./time/show_status.js";



function full_game() {

    console.log("Welcome To The Riddel Game");

    console.log("Enter your name: ");
    let name = get_input

    let player = create_player(name)

    let riddel = riddels

    
    
    for (let r of riddel){
        let time = Time_calculation(() => riddle_game(r))
        
        add_time(player,time)
    }


    console.log(show_status(player));
    
}


full_game()





















