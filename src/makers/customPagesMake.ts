import * as vscode from "vscode";
import execCmd from "../common";

export default async function customPagesMake() {
  const name = await vscode.window.showInputBox({
    placeHolder: "Custom Page Name",
    prompt: "Enter the Custom Page Name",
  });

  if (!name) {
    vscode.window.showErrorMessage(
      "A Name is mandatory to execute this action"
    );
    return;
  }

  const resourceName = await vscode.window.showInputBox({
    placeHolder: "Resource Name (Optional)",
    prompt: "Create the page inside a resource? (Optional)",
  });

  let pageType;
  if (resourceName !== "") {
    pageType = await vscode.window.showQuickPick(
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
  }

  let panelName = await vscode.window.showInputBox({
    placeHolder: "Panel Name (Default: admin)",
    prompt: "Enter the name of the panel for which it will be generated",
  });

  if (panelName === "") {
    panelName = "admin";
  }

  if (name !== undefined) {
    const command = `php artisan make:filament-page ${name} --resource="${resourceName}" ${
      resourceName !== "" ? `--type=${pageType?.value}` : ""
    } --panel=${panelName}`;

    execCmd(command);
  }
}
