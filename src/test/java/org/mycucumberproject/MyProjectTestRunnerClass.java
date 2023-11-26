package org.mycucumberproject;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Loginmyproject.feature",glue="org.stepdefinition/MyProjectLoginStepDefinition.java")
public class MyProjectTestRunnerClass {

}
