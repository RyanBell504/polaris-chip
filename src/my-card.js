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
}
:host([fancy]){
  display: block;
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
  width: 420px;
}
.card{
  width: 400px;
  height: 500px;
  background-color: var(--psu-blue, #001e62);
  border: solid 2px;
  margin: 8px;  
  display: inline-block;
}
.pic {
  margin: 0px 50px;
  border: 5px solid;
  width: 300px;
  height: 200px;
}
.btn{
  margin: 5px 150px;
  padding: 10px;
}
.description{
  margin: 5px 10px;
  font-size: 16px;
  color: white;
}
.title{
  margin: 1px 5px;
  color: white;
  font-size: 36px;
}
    `;
  }

  render() {
    return html`
<div class="card">
    <h1 class="title">
      ${this.title}
    </h1>
  <details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>Description</summary>
  <div>
    <slot>${this.description}</slot>
  </div>
  </details>
    <img class=pic src=${this.image}>
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
