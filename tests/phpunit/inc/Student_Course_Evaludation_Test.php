<?php
namespace Periscope\Test;

use PeriscopeTestCase;
use Tutor_Periscope\Evaluation\Student_Course_Evaluation;
use \Brain\Monkey\Functions;

class Student_Course_Evaluation_Test extends PeriscopeTestCase {

	function test_construct() {
		$evaluation = new Student_Course_Evaluation();
		$this->assertTrue( has_action( 'wp_ajax_tutor_periscope_evaluation', $evaluation ) );
	}
}
