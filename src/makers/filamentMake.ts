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

  let panelName = await vscode.window.showInputBox({
    placeHolder: "Panel Name (Default: admin)",
    prompt: "Enter the name of the panel for which it will be generated",
  });

  if (panelName === "") {
    panelName = "admin";
  }

  if (text !== undefined) {
    let t = vscode.window.createTerminal();
    const command = `php artisan make:filament-${inputName} ${text} --panel=${panelName}`;

    t.sendText(command);
    vscode.window.showInformationMessage(`${inputNameUpper} ${text} Created!`);
  }
}
