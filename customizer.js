( () => {

const Customizer = function (color = '#8fd6bd') {
    this.color = color;
    this.changeHeroBg('.about_page .head');
    this.changeLinkColor();
};

Customizer.prototype.color = '';
Customizer.prototype.changeHeroBg = function (CSSselector) {
    const collection = document.querySelectorAll(CSSselector);
    for (let i = 0; i < collection.length;  ++i) {
        const element = collection.item(i);
        element.style.backgroundColor = this.color;
    }
};

Customizer.prototype.changeLinkColor = function () {
    const collection = document.querySelectorAll('a');
    for (let i = 0; i < collection.length;  ++i) {
        const element = collection.item(i);
        element.style.color = this.color;
        if (element.classList.contains('button-default')) {
            element.style.borderColor = this.color;
        }
    }

};

const customizer = new Customizer('red');


}) ();