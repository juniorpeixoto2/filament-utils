import * as vscode from "vscode";

export default async function customPagesMake() {
  const text = await vscode.window.showInputBox({
    placeHolder: "Custom Page Name",
    prompt: "Enter the Custom Page Name",
  });

  if (text === "") {
    vscode.window.showErrorMessage(
      "A Name is mandatory to execute this action"
    );
    return;
  }

  const resourceName = await vscode.window.showInputBox({
    placeHolder: "Resource Name",
    prompt: "Create the page inside a resource? (Optional)",
  });

  const panelName = await vscode.window.showInputBox({
    placeHolder: "Panel Name",
    prompt: "Panel Name to create",
  });

  if (panelName === "") {
    vscode.window.showErrorMessage(
      "A Panel Name is mandatory to execute this action"
    );
    return;
  }

  const pageType = await vscode.window.showQuickPick(
    [
      {
        label: "Custom",
        value: "custom",
      },
      {
        label: "List",
        value: "listRecords",
      },
      {
        label: "Create",
        value: "createRecord",
      },
    ],
    {
      placeHolder: "Select Page Type",
    }
  );

  if (text !== undefined) {
    let t = vscode.window.createTerminal();
    const command = `php artisan make:filament-page ${text}  --resource=${resourceName} --type=${pageType?.value} --panel=${panelName}`;

    t.sendText(command);
    vscode.window.showInformationMessage(`Page ${text} Created!`);
  }
}
