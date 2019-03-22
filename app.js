console.log('connected')

//console.log(rupee)
document.querySelector('#rupee').addEventListener('input',(e)=>{
    let data = e.target.value
    document.querySelector('#dollar').innerHTML = data * 0.014
    document.querySelector('#euro').innerHTML = data * 0.013
    document.querySelector('#pounds').innerHTML = data * 0.011
})