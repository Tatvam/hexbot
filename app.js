
let canvas;
let ctx;
document.addEventListener('DOMContentLoaded', (event) => {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    flag = 0;
    canvas.addEventListener('click', (event) =>{
        flag = flag^1;
        console.log(flag);
        if(flag){
            canvas.addEventListener('mousemove',fun);
        }else{
            canvas.removeEventListener('mousemove',fun);
        }
    })
    });

function fun(event){
    //console.log(event);
    let url = 'http://api.noopschallenge.com/hexbot';
    let x = event.clientX;
    let y = event.clientY;
    axios.get(url).then((response) =>{
        let {colors} = response.data;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2*Math.PI);
        ctx.fillStyle = colors[0].value;
        ctx.fill();
    });
}

