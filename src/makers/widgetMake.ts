import * as vscode from "vscode";

export default async function widgetMake() {
  const widgetName = await vscode.window.showInputBox({
    placeHolder: "Widget Name",
    prompt: "Enter the Widget Name",
  });

  if (widgetName === "") {
    vscode.window.showErrorMessage(
      "A Widget Name is mandatory to execute this action"
    );
    return;
  }

  const resourceName = await vscode.window.showInputBox({
    placeHolder: "Resource Name",
    prompt: "Enter the Resource Name",
  });

  if (resourceName === "") {
    vscode.window.showErrorMessage(
      "A Resource Name is mandatory to execute this action"
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

  const widgetTypeName = await vscode.window.showQuickPick(
    [
      {
        label: "Custom",
        value: "",
      },
      {
        label: "Chart",
        value: "--chart",
      },
      {
        label: "Stats Overview",
        value: "--stats-overview",
      },
      {
        label: "Table",
        value: "--table",
      },
    ],
    {
      placeHolder: "Select Widget Type",
    }
  );

  const widgetType = widgetTypeName?.value;
  let widgetTypeChartValue;

  if (widgetType === "--chart") {
    const widgetTypeChart = await vscode.window.showQuickPick(
      [
        {
          label: "Bar chart",
          value: "--typeChart=barChart",
        },
        {
          label: "Bubble chart ",
          value: "--type=bubble",
        },
        {
          label: " Doughnut chart",
          value: "--type=doughnut",
        },
        {
          label: "Line chart",
          value: "--type=line",
        },
        {
          label: "Pie chart",
          value: "--type=pie",
        },
      ],
      {
        placeHolder: "Select Widget Type",
      }
    );

    widgetTypeChartValue = widgetTypeChart?.value;
  }

  let t = vscode.window.createTerminal();
  const command = `php artisan make:filament-widget ${widgetName} --resource=${resourceName} ${widgetType} --panel=${panelName}`;

  console.log(command);

  t.sendText(command);
}
