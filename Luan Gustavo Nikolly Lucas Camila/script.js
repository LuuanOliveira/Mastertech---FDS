function createLoader(img){
    this.div = document.createElement('div');
    this.div.className = 'loader';
    this.div.appendChild(img);
    console.log(this.div);
}