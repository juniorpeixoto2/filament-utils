import * as vscode from "vscode";

export default function customPagesMake() {
  return vscode.commands.registerCommand("make.custom.pages", async () => {
    const customPageName = await vscode.window.showInputBox({
      placeHolder: "Custom Page Name",
      prompt: "Enter the Custom Page Name",
    });

    if (customPageName === "") {
      vscode.window.showErrorMessage(
        "A Name is mandatory to execute this action"
      );
      return;
    }

    if (customPageName !== undefined) {
      let t = vscode.window.createTerminal();
      t.sendText(`php artisan make:filament-page ${customPageName}`);

      vscode.window.showInformationMessage(`Page ${customPageName} Created!`);
    }
  });
}
