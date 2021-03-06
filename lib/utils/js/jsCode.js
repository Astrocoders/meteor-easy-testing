import _ from 'lodash'
import sceneEntryTmpl from '~/templates/scene'
import pathes from '~/utils/pathes'
import readFile from '~/utils/filesystem/readFile'

export function prependLine({
  lineToPrepend,
  patternToPrepend,
  fileContent,
}) {
  if (fileContent.indexOf(lineToPrepend) !== -1) {
    // Included exists
    return fileContent
  }
  const lines = fileContent.split('\n')
  const lastLineWithPattern = _.findLastIndex(lines, line => patternToPrepend.test(line))

  return [
    ...lines.slice(0, lastLineWithPattern),
    lineToPrepend,
    ...lines.slice(lastLineWithPattern, lines.length),
  ].join('\n')
}

export function appendLine({
  lineToAppend,
  patternToAppendAfter,
  fileContent,
}) {
  if (fileContent.indexOf(lineToAppend) !== -1) {
    // Included exists
    return fileContent
  }

  const lines = fileContent.split('\n')
  const lastLineWithPattern = _.findLastIndex(lines, line => patternToAppendAfter.test(line)) + 1

  return [
    ...lines.slice(0, lastLineWithPattern),
    lineToAppend,
    ...lines.slice(lastLineWithPattern, lines.length),
  ].join('\n')
}

// Not the best way of doing this but gonna use this for now
export function appendChildToReactComponent({
  parentName,
  childDef,
  fileContent,
}) {
  // Force tabbing, increment spacing in front of each line
  const tabbed = childDef.split('\n').map(line => `    ${line}`).join('\n')
  return prependLine({
    lineToPrepend: tabbed,
    fileContent,
    patternToPrepend: RegExp(`</${parentName}>`, 'g'),
  })
}

export function appendScene({
  name,
}) {
  return appendChildToReactComponent({
    childDef: sceneEntryTmpl({name}),
    parentName: 'Scene',
    fileContent: readFile({filePath: pathes.rootScenes}),
  })
}
