// walk function pretty much straight from the source of panicsteve/cloud-to-butt
walk(document.body);

function walk(node) {
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) {
  var sentences = textNode.nodeValue.split(/((?<!\d)\. |\? )/g);

  var result = '';
  sentences.forEach(function(phrase) {
    // exit early 95% of the time and change nothing
    if (Math.random() > 0.95) {
      if (phrase === '. ') {
        phrase = ', eh. ';
      } else if (phrase === '? ') {
        phrase = ', eh? ';
      }
    }
    result += phrase;
  });

  textNode.nodeValue = result;
}
