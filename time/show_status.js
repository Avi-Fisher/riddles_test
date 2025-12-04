
export function show_status(player) {

    let time = player.times

    let sum = time.reduce(function (x, y) {
    return x + y;
    }, 0);

    let sum_time = sum


    const average = array => array.reduce((a, b) => a + b) / array.length;

    let average_time = average(player.times);

    return { sum_in_sec: sum_time, average_in_sec: average_time }
}


