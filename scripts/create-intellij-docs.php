<?php
/**
 * Reads the Unity documentation folder and creates
 * an IntelliJ compatible docs package for UnityScript
 */

require_once 'vendor/autoload.php';

if(isset($argv[1])) {
	$docsPath = $argv[1];
} else {
	// Use MacOS default if no path provided
	$docsPath = '/Applications/Unity/Documentation/en/ScriptReference/';
}

$jsdocsPath = '../jsdocs/';
$classRegex = "/^([a-zA-Z]*)\.html$/";
$jarArchive = '../jar/unityscript';
$jarFileEnding = 'jar';
$createdFiles = 0;
$version = null;
$zip = null;

$allFiles = scandir($docsPath);
$classFiles = array();

// First: Cleanup
print('Cleaning up...' . PHP_EOL);
function cleanup($dir) {
	$deletedFiles = 0;
	$existingJsFiles = scandir($dir);
	foreach($existingJsFiles as $file) {
		if ($file != '.' && $file != '..') {
			unlink($dir . $file);
			$deletedFiles++;
		}
	}
	print('deleted ' . $deletedFiles . ' files in ' . $dir . PHP_EOL);
}

cleanup($jsdocsPath);
$loader = new Twig_Loader_Filesystem('./templates');
$twig = new Twig_Environment($loader);
$template = $twig->load('UnityScriptClass.twig');

foreach($allFiles as $file) {
	$matches = array();
	if(preg_match($classRegex, $file, $matches)) {
		$classFiles[$matches[1]] = array();
	}
}

function openZipFile($jarArchive) {
	$zip = new ZipArchive();
	$zip->open($jarArchive, ZipArchive::CREATE | ZipArchive::OVERWRITE);
	return $zip;
}

// Suppress "Unexpected end tag: input" this way, since LIBXML_NOWARNING doesn't seem to do anything
libxml_use_internal_errors(true);

function nodeHasClass($node, $className) {
	return $node->getAttribute('class') == $className;
}

function parseDocsTable($div) {
	$properties = array();

	$trs = $div->getElementsByTagName('tr');
	foreach($trs as $tr) {
		$tds = $tr->getElementsByTagName('td');
		$variable = array(
			"name" => null,
			"desc" => null
		);
		foreach($tds as $td) {
			if(nodeHasClass($td, 'lbl')) {
				$variable["name"] = $td->textContent;
			} elseif(nodeHasClass($td, 'desc')) {
				$variable["desc"] = $td->textContent;
			}
		}
		array_push($properties, $variable);
	}

	return $properties;
}

function getUnityVersionNumber($divNodes) {
	foreach ($divNodes as $div) {
		if(nodeHasClass($div, 'version-number')) {
			$bs = $div->getElementsByTagName('b');
			return $bs[0]->textContent;
		}
	}

}

$skipFiles = array('index');

foreach($classFiles as $file => $options) {
//	debug:
//	if($file != 'Caching') {
//		continue;
//	}

	if(in_array($file, $skipFiles)) {
		continue;
	}

	$document = new DOMDocument();
	$document->loadHTMLFile($docsPath . $file . '.html', LIBXML_NOWARNING);

	$properties = array();
	$staticProperties = array();
	$methods = array();
	$staticMethods = array();

	$divs = $document->getElementsByTagName('div');

	if (is_null($version)) {
		$version = getUnityVersionNumber($divs);
		print('Unity Version: ' . $version . PHP_EOL);
		$jarArchive = "$jarArchive-$version.$jarFileEnding";
		$zip = openZipFile($jarArchive);
	}


	foreach($divs as $div) {
		if (!nodeHasClass($div, 'subsection')) {
			continue;
		}
		$h2s = $div->getElementsByTagName('h2');
		$h2 = $h2s[0];
		if (is_null($h2)) {
			continue;
		}
		switch($h2->textContent) {
			case 'Variables':
				$newProperties = parseDocsTable($div);
				$properties = array_merge($properties, $newProperties);
				break;

			case 'Public Functions':
				$newMethods = parseDocsTable($div);
				$methods = array_merge($methods, $newMethods);
				break;

			case 'Static Variables':
				$newProperties = parseDocsTable($div);
				$staticProperties = array_merge($methods, $newProperties);
				break;

			case 'Static Functions':
				$newMethods = parseDocsTable($div);
				$staticMethods = array_merge($methods, $staticMethods);
				break;

			default:
				break;
		}
	}

	 $classDocs = array(
		 'className' => $file,
		 'properties' => $properties,
		 'methods' => $methods,
		 'staticProperties' => $staticProperties,
		 'staticMethods' => $staticMethods
	);
	$jsdoc = ($template->render($classDocs));
	$currentJsDocsFile = $jsdocsPath . $file . '.js';
	$jsfile = fopen($currentJsDocsFile, 'w+');
	fputs($jsfile, $jsdoc);
	fclose($jsfile);
	$createdFiles++;
	$zip->addFile($currentJsDocsFile, basename($currentJsDocsFile));
}

print('Created ' . $createdFiles . ' js files' . PHP_EOL);
$zip->close();
print('Created JAR archive in ' . $jarArchive . PHP_EOL);
print('Done.' . PHP_EOL);