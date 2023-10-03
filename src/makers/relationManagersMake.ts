import * as vscode from "vscode";

export default async function relationManagersMake() {
  const resourceName = await vscode.window.showInputBox({
    placeHolder: "Resource Name",
    prompt: "Enter the Resource Name",
  });

  if (resourceName === "") {
    vscode.window.showErrorMessage(
      "A Resource name is mandatory to execute this action"
    );
    return;
  }

  const relationshipName = await vscode.window.showInputBox({
    placeHolder: "What is the relationship?",
    prompt: "What is the relationship?",
  });

  if (relationshipName === "") {
    vscode.window.showErrorMessage(
      "A Relationship name is mandatory to execute this action"
    );
    return;
  }

  const attributeName = await vscode.window.showInputBox({
    placeHolder: "Attribute Name (name)",
    prompt: "What is the title attribute?",
  });

  if (attributeName === "") {
    vscode.window.showErrorMessage(
      "A Attribute Name is mandatory to execute this action"
    );
    return;
  }

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

  let t = vscode.window.createTerminal();
  const command = `php artisan make:filament-relation-manager ${resourceName} ${relationshipName} ${attributeName} --panel=${panelName}`;

  t.sendText(command);
  vscode.window.showInformationMessage(
    `Relation Manager ${relationshipName} Created!`
  );
}
