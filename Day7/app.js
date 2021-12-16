const content = document.querySelector(".content");
const input = document.querySelector(".content input");
const btn = document.querySelector(".remove")
var tags = ['NodeJS','ReactJS'];

function render(){
    content.innerHTML=''; //
    for (let i =0 ; i<tags.length;i++){
        const tag = tags[i];
        content.innerHTML += `<li>${tag}<i class='bx bx-x' onclick="removeTag(${i})"></i>
             </li>`;
    }
    content.appendChild(input)
    input.focus();
}
render();

input.addEventListener('keydown', function(e) {
     if (e.key == "Enter") {
       tags.push(input.value.trim());
       input.value = ''
        render();
        e.target.focus;
     }
})

function removeTag(index){
    tags = tags.filter((e,i) => index!=i)
    render();
}

btn.addEventListener('click', function(){
    tags = [];
    render();
})