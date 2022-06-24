let el = document.getElementsByClassName('item');

for (let i=0; i<el.length; i++) {
    el[i].addEventListener("mouseenter", showSub, false);
    el[i].addEventListener("mouseleave", hideSub, false);
} 

function showSub(e) {
    if (this.children.length>1) {
        this.children[1].classList.add("show__submenu");
    } else {
        return false;
    }
}

function hideSub(e) {
    if(this.children.length>1) {
        this.children[1].classList.remove("show__submenu");
    } else {
        return false;
    }
}