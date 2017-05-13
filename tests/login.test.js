this.loginTest = function(browser) {
	browser
		.url("http://localhost:8080/")
		.waitForElementVisible("body", 1000)
		.setValue("#email", "kishu#navercorp.com")
		.click("#password")
		.assert.cssClassPresent("form > .form-group:nth-child(1)", "has-error")
		.setValue("#email", "kishu@navercorp.com")
		.click("#password")
		.assert.cssClassNotPresent("form > .form-group:nth-child(1)", "has-error")
		.end();
};
