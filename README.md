# intellij-unityscript
Scripts and Builds in order to use IntelliJ with UnityScript

## Using directly
1. [Download unityscript-5.5.jar](jar/unityscript-5.5.jar)
2. In IntelliJ open Project Settings (File → Project structure)
3. In "Libraries" click the "+" and select "Java". In the popup select the downloaded jar file
4. If asked what you want to import select "Classes"
5. Make sure that the JavaScript language version is set to ECMAScript 6 (IntelliJ Preferences → Project Settings -> JavaScript)
6. You should now have proper code completion in IntelliJ (at least most of it ;))

## Building yourself
1. Clone the repository
2. Make sure you have PHP and [Composer](https://getcomposer.org/) installed
3. Navigate to the scripts folder: `cd scripts`
4. Run the script: `php create-intellij-docs.php <path-to-unity-script-reference-docs>`. If you don't provide a path, it will automatically use the MacOS path `/Applications/Unity/Documentation/en/ScriptReference/`
5. The jar file will be placed in the jar directory one level up