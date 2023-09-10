import * as vscode from 'vscode';
import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';


export async function createBranch() {

    const inputMsg = await vscode.window.showInputBox({
        placeHolder: "Enter branch name ...",
        prompt: "Enter the name of the new branch"
    });
    if (inputMsg === '') {
        vscode.window.showErrorMessage('Branch name can not be empty.');
        return;
    }

    if (vscode.workspace.workspaceFolders !== undefined) {
        vscode.workspace.workspaceFolders.forEach(function (value) {

            const options: Partial<SimpleGitOptions> = {
                baseDir: value.uri.fsPath,
                binary: 'git',
                maxConcurrentProcesses: 1,
                trimmed: false,
            };
            const git: SimpleGit = simpleGit(options);

            let newBranchName: string = inputMsg!;
            git.checkoutLocalBranch(newBranchName);
        });
    } else {
        vscode.window.showErrorMessage('No workspace specified.');
    }
}

export async function createCommit() {

    const inputMsg = await vscode.window.showInputBox({
        placeHolder: "Enter commit message ...",
        prompt: "Enter the message of the commit"
    });
    if (inputMsg === '') {
        vscode.window.showErrorMessage('Commit message can not be empty.');
        return;
    }

    if (vscode.workspace.workspaceFolders !== undefined) {
        vscode.workspace.workspaceFolders.forEach(function (value) {

            const options: Partial<SimpleGitOptions> = {
                baseDir: value.uri.fsPath,
                binary: 'git',
                maxConcurrentProcesses: 1,
                trimmed: false,
            };
            const git: SimpleGit = simpleGit(options);

            let commitMsg: string = inputMsg!;
            git
            .add('./*')
            .commit(commitMsg);
        });
    } else {
        vscode.window.showErrorMessage('No workspace specified.');
    }
}