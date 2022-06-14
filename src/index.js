import {LitElement, html, css} from 'lit-element'
import './getData';

export class Index extends LitElement {

    static get properties() {
        return {
          getDataAPI: [],
        };
      }

    constructor(){
        super()
        this.getDataAPI = JSON.parse(localStorage.getItem('myData'))
    }

    static get styles() {
        return css`
            .container {
                display: flex;
                flex-direction: column;
                max-width: 1000px;
                margin: 0 auto;
                
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
            margin: 8px 0;
        }

        .item-row {
            width: 100%;
            text-align: center;
          }
        `;
      }

    render() {
        return html `
        <get-data></get-data>
        ${this.dataTemplete}`;
    }

    get dataTemplete(){
        return html`
        <div class="container">
            <div class="header">
                <p class="item">Fecha</p>
                <p class="item">Nombre</p>
                <p class="item">Valor</p>
            </div>

            ${this.getDataAPI && this.getDataAPI.map((item)=>{
                return html`
                <div class="row">
                    <p class="item-row">${item?.stations?.[0].indexes?.[0]?.calculationTime}</p>
                    <p class="item-row">${item?.stations?.[0].name}</p>
                    <p class="item-row">${item?.stations?.[0].measurements?.[0]?.value ? item?.stations?.[0].measurements?.[0]?.value : 0}</p>
                </div>
                `
            })}
        `
    }
}

customElements.define('my-app', Index)