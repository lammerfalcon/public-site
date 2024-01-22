export function getSlotChildrenText(children: any) {
  return children.map((node: any) => {
    if (!node.children || typeof node.children === 'string')
      return node.children || ''
    else if (Array.isArray(node.children))
      return getSlotChildrenText(node.children)
    else if (node.children.default)
      return getSlotChildrenText(node.children.default())
  }).join('')
}
