export function formatAmpersand(event, editor, next) {
  if (event.key !== '&') return next();
  event.preventDefault();
  editor.insertText('and');
}

export function formatCode(event, editor, next) {
  if (event.key !== '`' || !event.ctrlKey) return next();
  event.preventDefault();
  const isCode = editor.value.blocks.some((block) => block.type === "code");
  editor.setBlocks(isCode ? 'paragraph' : 'code');
}

export function formatBold(event, editor) {
  event.preventDefault();
  editor.toggleMark('bold');
}