function countdown(due){
    const now = new Date();
    const rest = due.getTime() - now.getTime();
    const sec = Math.floor(rest/1000) % 60;
    const min = Math.floor(rest/1000/60) % 60;
    const hours = Math.floor(rest/1000/60/60) % 24;
    const days = Math.floor(rest/1000/60/60/24);
    const count = [days,hours,min,sec,]
    return count;

}
    const goal = new Date(2025,12,31,23,59,59);
    function recalc(){
        const counter = countdown(goal);
    const time = `${counter[0]},${counter[1]},${counter[2]},${counter[3]}`;
    document.getElementById('day').textContent = counter[0];
    document.getElementById('time').textContent = counter[1];
    document.getElementById('minut').textContent = counter[2];
    document.getElementById('second').textContent = counter[3];
    refresh();
    }
    function refresh(){
        setTimeout(recalc,1000);
    }

    recalc();
