import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "git-multi-repo" is now active!');

	let disposable = vscode.commands.registerCommand('git-multi-repo.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Git Multi Repo!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
