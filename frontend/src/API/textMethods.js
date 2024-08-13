export const cutString = (text, limit, endDecorator = '...') => {
  text = text.trim();
  if (text.length <= limit) return text;

  text = text.slice(0, limit);
  const lastSpace = text.lastIndexOf(" ");

  if (lastSpace > 0) {
    text = text.substr(0, lastSpace);
  }

  return text + endDecorator;
}

export const cutStringAround = (text, target, rightLimit, endDecorator = '...') => {
  text = text.trim()

  const
    // target Indexes
    targetFirstIndex = text.toLowerCase().indexOf(target.toLowerCase()),
    targetLastIndex = targetFirstIndex + target.length,
    // text around target
    textSentencesBeforeTarget = text.slice(0, targetFirstIndex).split('. '),
    textBeforeTarget = textSentencesBeforeTarget[textSentencesBeforeTarget.length - 1]

  let
    textAfterTarget = text.slice(targetLastIndex, text.length)

  if (textAfterTarget.length <= rightLimit) {
    return [textBeforeTarget, target, textAfterTarget].join('')
  }

  textAfterTarget = text.slice(targetLastIndex, targetLastIndex + rightLimit)

  const lastSpace = textAfterTarget.lastIndexOf(" ")

  if (lastSpace > 0) {
    textAfterTarget = textAfterTarget.substr(0, lastSpace);
  }

  return [textBeforeTarget, target, textAfterTarget].join('') + endDecorator
}

export const removeTags = (text) => {
  return text.replace(/(<([^>]+)>)/gi, '')
}

export const getAnchors = (doc, anchorsClass, cutStringLimit, slugTemplate) => {
  const
    elements = doc.querySelectorAll(anchorsClass),
    result = []

  elements.forEach((element, id) => {
    const
      title = cutString(
        element.innerText
          .split('\n')
          .join(' '),
        cutStringLimit
      ),
      slug = slugTemplate + (id + 1),
      anchor = {
        id: id,
        slug: slug,
        title: title,
      }

    element.id = slug

    result.push(anchor)
  });

  return result;
}

export const getSiteName = (link) => {
  return link.split('/')[2]
}

export const groupItemsByFirstChar = list => {
  const
    result = []

  let
    currentChar = '',
    index = -1

  list.forEach(element => {
    const firstChar = element.name[0]

    if (firstChar !== currentChar) {
      currentChar = firstChar

      result.push({
        letter: currentChar,
        elements: []
      })

      index += 1
    }

    if (firstChar === currentChar) {
      result[index].elements.push(element)
    }
  })

  return result
}
