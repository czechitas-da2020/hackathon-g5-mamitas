let loginPage = {
    get loginLink() {return $('.user_login')},
    get userEmail() { return $('#email') },
    get inputPassword() { return $('#passwd') },
    get buttonSignIn() { return $('#SubmitLogin') },
  
    login(username, password) {
        this.loginLink.click();
      this.userEmail.setValue(username);
      this.inputPassword.setValue(password);
      this.buttonSignIn.click();
    }
  };
  
  module.exports = loginPage;
