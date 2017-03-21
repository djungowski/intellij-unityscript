# intellij-unityscript
Scripts and Builds in order to use IntelliJ with UnityScript

## Using in IntelliJ
1. [Download unityscript-5.5.jar](jar/unityscript-5.5.jar)
2. In IntelliJ open Project Settings (File → Project structure)
3. In "Libraries" click the "+" and select "Java". In the popup select the downloaded jar file
4. If asked what you want to import select "Classes"
5. Make sure that the JavaScript language version is set to ECMAScript 6 (IntelliJ Preferences → Project Settings → JavaScript)
6. You should now have proper code completion in IntelliJ (at least most of it ;))

If you don't want to take these steps for every Unity project, add the Jar to the Global Libraries instead of only the Libraries

## Using in WebStorm/PhpStorm/*Storm
1. Download the [unityscript-5.5.zip](jar/unityscript-5.5.zip) (alternatively clone the repo and omit step 2)
2. Extract archive
3. Make sure that the JavaScript language version is set to ECMAScript 6 (IntelliJ Preferences → Project Settings → JavaScript)
4. Open Project Settings and navigate to JavaScript → Libraries)
5. Click "Add"
6. Enter Name "UnityScript" and version (e.g. 5.5), click the "+" under the first box, select "Attach Directories..." and select the jsdocs/ folder from the extracted zip file


## Building yourself
1. Clone the repository
2. Make sure you have PHP and [Composer](https://getcomposer.org/) installed
3. Install dependencies: `composer install`
4. Navigate to the scripts folder: `cd scripts`
5. Run the script: `php create-intellij-docs.php <path-to-unity-script-reference-docs>`. If you don't provide a path, it will automatically use the MacOS path `/Applications/Unity/Documentation/en/ScriptReference/`
6. The jar file will be placed in the jar directory one level up