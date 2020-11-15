function bunga() {
    let kotak = document.getElementById('gambar');
    let Bunga = document.getElementById('Bunga');

    if (!Bunga.value == ' '){
        kotak.innerHTML = `<img src="${Bunga.value}.jpg"></img>`
        alert(`Ini bunga ${Bunga.value}`)
    }
    return false;
}
