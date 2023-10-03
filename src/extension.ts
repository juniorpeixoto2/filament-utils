import * as vscode from "vscode";
import widgetMake from "./makers/widgetMake";
import customPagesMake from "./makers/customPagesMake";
import filamentMake from "./makers/filamentMake";
import relationManagersMake from "./makers/relationManagersMake";

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand("make.widget", async () => {
    widgetMake();
  });

  vscode.commands.registerCommand("make.custom.page", async () => {
    customPagesMake();
  });

  vscode.commands.registerCommand("make.resource", async () => {
    filamentMake("resource");
  });

  vscode.commands.registerCommand("make.panel", async () => {
    filamentMake("panel");
  });

  vscode.commands.registerCommand("make.theme", async () => {
    filamentMake("theme");
  });

  vscode.commands.registerCommand("make.relation.manager", async () => {
    relationManagersMake();
  });
}

export function deactivate() {}
