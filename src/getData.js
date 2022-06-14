import {LitElement, html} from 'lit-element'

export class GetData extends LitElement {
    constructor(){
        super()
        this.getData()
    }

    getData(){
        fetch('https://api.datos.gob.mx/v1/calidadAire', {method: "GET"})
        .then(res => res.json())
        .then(data => {
            console.log('data', data.results)
            localStorage.setItem('myData', data.results)
        })
        .catch(err => console.log('error', err))
    }
}

customElements.define('get-data', GetData)