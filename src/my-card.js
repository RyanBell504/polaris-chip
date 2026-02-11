import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title="HAX CARD";
    this.description="DEFAULT DESCRIPTION";
    this.image="https://gopsusports.com/imgproxy/WGYkyuIKGU5T0IO-JEftbXTHodp6K-Il-oM_MFSwaiE/rs:fit:1980:0:0:0/g:ce:0:0/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvcHN1c3BvcnRzLXByb2QvMjAyMy8wNy8xMy9DNFMycW5DRzhxcE1JNHBYTGhHT1hacng1Qkdrd0FURDNMZnMwdG9CLndlYnA.webp";
    this.link="https://hax.psu.edu";
    this.fancy=false;
  }

  static get styles() {
    return css`
   :host {
  display: inline-block;
  margin: 10px;
}
:host([fancy]){
  display: inline-block;
  box-shadow: 10px 5px 5px darkblue
}
.card{
  width: 400px;
  height: 500px;
  background-color: var(--psu-blue, #001e62);
  border: solid 2px;
}
.pic {
  margin: 0px 50px;
  border: 5px solid;
  width: 300px;
  height: 200px;
  aspect-ratio: 3/2;
}
.btn{
  margin: 100px 150px;
  padding: 10px;
}
.description{
  font-size: 16px;
  color: white;
  text-align: left;
  padding: 8px;
  height: 80px;
  overflow: auto;
}
.title{
  margin: 1px 5px;
  color: white;
  font-size: 36px;
  text-align: center;
}
    `;
  }

  render() {
    return html`
<div class="card">
    <h1 class="title">
      ${this.title}
    </h1>
    <img class=pic src=${this.image}>
  <details class="description" ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>Description</summary>
  <div>
    <slot>${this.description}</slot>
  </div>
  </details>
   <a href=${this.link}>
    <button class="btn">Details</button>
    </a>
</div>
`;
  }
  // put this anywhere on the MyCard class; just above render() is probably good
openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String  },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
