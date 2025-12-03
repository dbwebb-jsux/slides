export default class ClassesComponent extends HTMLElement {
    connectedCallback() {
        console.log(this)
        
        this.innerHTML = `<h1>Classes Component</h1>`
    }
}