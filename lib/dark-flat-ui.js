'use babel';
import { CompositeDisposable } from 'atom';

export var config = {
  accentColor: {
    type: 'string',
    default: 'red',
    enum: [ 'red', 'purple', 'blue', 'green' ],
    order: 1
  },
  coloredTabs: {
    description: 'Match the active tab\'s background color with the text editor',
    type: 'boolean',
    default: true,
    order: 2
  }
};

var disposable;

export function activate() {
  disposable = new CompositeDisposable(
    atom.config.observe('dark-flat-ui.accentColor', updateAccentColor),
    atom.config.observe('dark-flat-ui.coloredTabs', updateTabColor)
  );
}

export function deactivate() {
  disposable.dispose();
}

var workspaceView = atom.views.getView(atom.workspace);

function updateAccentColor(accentColor) {
  workspaceView.setAttribute('data-dark-flat-ui-accent-color', accentColor);
}

function updateTabColor(tabColor) {
  workspaceView.setAttribute('data-dark-flat-ui-colored-tabs', tabColor);
}
