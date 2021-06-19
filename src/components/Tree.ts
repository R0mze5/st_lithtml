
import {html} from 'lit-html';


interface Tree {
  id: number
  items?: Array<Tree>
}

const treeStructure:Tree = {
  id: 1,
  items: [{
    id: 2,
    items: [{
      id: 3
    }]
  }]
}

const TreeComponent = (tree: Tree, level = 0) => {
  const currentLevel = level + 1;
  return  html`
  ${tree?.id ? html`<div>${'-'.repeat(level )} tree:${tree.id}</div><br/>` : null}
  
  ${tree?.items ? html`
    <div>
      ${'-'.repeat(currentLevel)} items:${tree.items.map(leaf => TreeComponent(leaf, currentLevel))}
    </div>
  ` : null}
  
  `
}

export const Tree = html`

    <h3>Tree structure</h3>
    <div>${TreeComponent(treeStructure)}</div>
  
`