// Import lit-html
import {html, render} from 'lit-html';
import {until} from 'lit-html/directives/until.js';

import {Tree} from './components/Tree'

// Define a template
const content = fetch('./lorem.json').then(r => r.text());

content.then(value => console.log({value}))




const myTemplate = (name) => html`
<div>
  <p>
    Hello ${name}
  </p>
  <p>
    ${until(
      content,
      html`<span>Loading...</span>`
    )}
  </p>
  <div>
    ${Tree}
  </div>
</div>
`;

// Render the template to the document
render(myTemplate('World'), document.body);