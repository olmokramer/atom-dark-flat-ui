'use strict'
class DarkFlatUI
  config:
    tabSyntaxThemeBackground:
      description: 'Match the active tab\'s background color with the text editor'
      type: 'boolean'
      default: true

  activate: ->
    @sub = atom.config.observe 'dark-flat-ui', @update

  deactivate: ->
    @sub.dispose()

  update: (config) ->
    console.log config
    workspaceView = atom.views.getView atom.workspace
    if config.tabSyntaxThemeBackground
      workspaceView.classList.add 'dark-flat-ui-tab-syntax-background'
    else
      workspaceView.classList.remove 'dark-flat-ui-tab-syntax-background'

module.exports = new DarkFlatUI()