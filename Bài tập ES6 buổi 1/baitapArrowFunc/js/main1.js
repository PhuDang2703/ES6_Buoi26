
['active pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar'].forEach((item)=>{
    let button = document.createElement('button');
    button.setAttribute('class',`color-button ${item}`)
    // button.textContent = item
    button.addEventListener("click", ()=>{
        document.getElementById('house').setAttribute('class',`house ${item}`)
    })
    document.getElementById('colorContainer').appendChild(button)
})