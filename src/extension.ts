import * as vscode from 'vscode';
import { createBranch, createCommit } from './git-multi-repo/main';

export function activate(context: vscode.ExtensionContext) {
	let disposables = [];
	
	disposables.push(vscode.commands.registerCommand('git-multi-repo.newBranch', () => {
		createBranch();
	}));

	disposables.push(vscode.commands.registerCommand('git-multi-repo.newCommit', () => {
		createCommit();
	}));

	disposables.forEach((disposable) => {
		context.subscriptions.concat(disposable);
	});

	console.log('Congratulations, your extension "git-multi-repo" is now active!');
}

export function deactivate() {
	console.log('Your extension "git-multi-repo" is now deactivated!');
}
