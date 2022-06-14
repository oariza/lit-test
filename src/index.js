import {LitElement, html, css} from 'lit-element'

export class Index extends LitElement {
    constructor(){
        super()
        this.getDataAPI = localStorage.getItem('myData')
        this.getData()
    }

    static get styles() {
        return css`
            .container {
                display: flex;
                flex-direction: column;
                
            }
          .header { 
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: lightgray;
            border-radius: 5px;
            margin: 8px 0;
        }

          .item {
            width: 100%;
            text-align: center;
            font-weight: 600;
          }

          .row { 
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-radius: 5px;
            border: 1px solid gray;
        }

        .item-row {
            width: 100%;
            text-align: center;
          }
        `;
      }

      getData(){
        fetch('https://api.datos.gob.mx/v1/calidadAire', {method: "GET"})
        .then(res => res.json())
        .then(data => {
            console.log('data', data.results)

        })
        .catch(err => console.log('error', err))
    }

    render(){
        return html`
        <div class="container">
            <div class="header">
                <p class="item">Fecha</p>
                <p class="item">Nombre</p>
                <p class="item">Valor</p>
            </div>

            <div class="row">
                <p class="item-row">23-12-2022</p>
                <p class="item-row">Aguilas</p>
                <p class="item-row">1.02</p>
            </div>

            <div>${this.getDataAPI && this.getDataAPI.map((item)=>{
                item._id
            })}</div>
        </div>
        `
    }
}

customElements.define('my-app', Index)