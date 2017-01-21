<?php
/**
 * Reads the Unity documentation folder and creates
 * an IntelliJ compatible docs package for UnityScript
 */

require_once 'vendor/autoload.php';

$docsPath = '/Applications/Unity/Documentation/en/ScriptReference/';
$classRegex = "/^([a-zA-Z]*)\.html$/";

$allFiles = scandir($docsPath);
$classFiles = array();

$loader = new Twig_Loader_Filesystem('./templates');
$twig = new Twig_Environment($loader);
$template = $twig->load('UnityScriptClass.twig');

foreach($allFiles as $file) {
	$matches = array();
	if(preg_match($classRegex, $file, $matches)) {
		$classFiles[$matches[1]] = array();
	}
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

foreach($classFiles as $file => $options) {
//	if($file != 'Caching') {
//		continue;
//	}
	$document = new DOMDocument();
	$document->loadHTMLFile($docsPath . $file . '.html', LIBXML_NOWARNING);

	$properties = array();
	$staticProperties = array();
	$methods = array();
	$staticMethods = array();

	$divs = $document->getElementsByTagName('div');
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
	$jsfile = fopen('../jsdocs/' . $file . '.js', 'w+');
	fputs($jsfile, $jsdoc);
//	$classFiles[$file] = $classDocs;
}

//print_r($classFiles);
//print("Found " . count($allFiles) . " files in total" . PHP_EOL);
//print("Found " . count($classFiles) . " class files" . PHP_EOL);