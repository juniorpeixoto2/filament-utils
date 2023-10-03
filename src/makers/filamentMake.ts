import * as vscode from "vscode";

export default async function filamentMake(inputName: string) {
  const inputNameUpper = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  const text = await vscode.window.showInputBox({
    placeHolder: `${inputNameUpper} Name`,
    prompt: `Enter the ${inputNameUpper} Name`,
  });

  if (text === "") {
    vscode.window.showErrorMessage(
      `A ${inputNameUpper} Name is mandatory to execute this action`
    );
    return;
  }

  if (text !== undefined) {
    let t = vscode.window.createTerminal();
    const command = `php artisan make:filament-${inputName} ${text}`;

    t.sendText(command);
    vscode.window.showInformationMessage(`${inputNameUpper} ${text} Created!`);
  }
}
