import validator from "validator";

class LoginController {
	constructor() {
		this.email = document.getElementById("email");
		this.password = document.getElementById("password");

		this.email.addEventListener("blur", this.onBlurEmail.bind(this));
	}

	onBlurEmail() {
		let validation = false;
		const email = this.email.value;

		if (!validator.isEmpty(email)) {
			validation = validator.isEmail(email);
		}

		this.toggleErrorClass(this.email, validation);
	}

	toggleErrorClass(el, validation) {
		if (!validation) {
			el.parentNode.classList.add("has-error");
		} else {
			el.parentNode.classList.remove("has-error");
		}
	}
}

export default LoginController;