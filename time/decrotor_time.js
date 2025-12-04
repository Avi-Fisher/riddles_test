



export function Time_calculation(fun){

    const start =  Date.now()
    fun()
    const end =  Date.now()

    
    let diffrent_time = (end - start) / 1000


    return diffrent_time 

}










