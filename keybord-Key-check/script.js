const insert = document.querySelector(".insert")

window.addEventListener("keydown", (e)=>{
    insert.innerHTML = `
    <div class = "table">
    <table>
    <tr>
    <th>key</th>
    <th>key code</th>
    <th>code</th>
    </tr>
    <tr>
    <th>${e.key === " " ? "space": e.key}</th>
    <th>${e.keyCode}</th>
    <th>${e.code}</th>
    </tr>
    </table>
    </div>
    `
})