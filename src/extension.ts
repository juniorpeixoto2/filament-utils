import * as vscode from "vscode";
import resourceMake from "./makers/resourceMake";
import widgetMake from "./makers/widgetMake";
import customPagesMake from "./makers/customPagesMake";
import filamentMake from "./makers/filamentMake";

export function activate(context: vscode.ExtensionContext) {
  //   resourceMake();
  widgetMake();
  customPagesMake();

  vscode.commands.registerCommand("make.resource", async () => {
    filamentMake("resource");
  });

  vscode.commands.registerCommand("make.panel", async () => {
    filamentMake("panel");
  });

  vscode.commands.registerCommand("make.theme", async () => {
    filamentMake("theme");
  });

  //@todo
  /*

//   php artisan make:filament-resource Patient

//   php artisan make:filament-widget BlogPostsOverview
  php artisan make:filament-widget LatestOrders --table
  	// php artisan make:filament-widget PatientTypeOverview --stats-overview
	// php artisan make:filament-widget TreatmentsChart --chart

	// php artisan make:filament-page Settings
	
	// php artisan make:filament-theme
	// php artisan make:filament-theme admin

	// php artisan make:filament-panel app

	php artisan make:filament-page SortUsers --resource=UserResource --type=custom
	
	php artisan make:filament-relation-manager CategoryResource posts title
	php artisan make:filament-relation-manager CategoryResource posts title --soft-deletes
	php artisan make:filament-relation-manager CategoryResource posts title --attach
	php artisan make:filament-relation-manager CategoryResource posts title --associate
	php artisan make:filament-relation-manager CategoryResource posts title --view
	php artisan make:filament-relation-manager CategoryResource posts title --soft-deletes
	
	
	Snippets
	protected static ?int $sort = 2;
	protected static ?string $navigationIcon = 'heroicon-o-document-text';
	protected static ?string $activeNavigationIcon = 'heroicon-o-document-text';
	protected static ?string $navigationGroup = 'Settings';
	protected static bool $shouldRegisterNavigation = false;

	protected static ?string $title = 'Custom Page Title';
	protected static ?string $navigationLabel = 'Custom Navigation Label';
	protected static ?string $slug = 'custom-url-slug';
	protected ?string $heading = 'Custom Page Heading';
	protected ?string $subheading = 'Custom Page Subheading';
	*/

  //   context.subscriptions.push(disposable);
}

export function deactivate() {}
