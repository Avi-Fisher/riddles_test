
export function show_status(player) {

    let time = player.times

    let sum = time.reduce(function (x, y) {
    return x + y;
    }, 0);

    let sum_time = sum


    const average = array => array.reduce((a, b) => a + b) / array.length;

    let average_time = average(player.times);

    console.log(player.name ,"Your status time is:")
    console.log("Sum time in sec:", sum_time, "average time in sec:", average_time);
    
        
}


