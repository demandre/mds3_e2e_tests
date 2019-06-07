var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Open Website Vente privée': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/authentication/Portal/FR')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.title('Veepee : grandes marques à prix discount, ventes événementielles chaque jour.')
  },

  'Check block login': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/authentication/Portal/FR')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#txtEmail')
      .assert.elementPresent('#txtPassword')
      .assert.elementPresent('#btSubmit')
      .assert.elementPresent('#signUpLink')
  },

  'Open registration page': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.title('Devenez membre vente-privée : chaque jour les plus grandes marques à prix discount')
      .assert.urlContains("https://secure.fr.vente-privee.com/registration/registration");
  },

  'RadioButton homme must exists': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#rbtCivility_1')
  },

  'RadioButton femme must exists': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#rbtCivility_2')
  },

  'RadioButton femme must exists': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#rbtCivility_2')
  },

  'Field "Nom" must exists': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#txtLastName')
  },

  'Field "Prenom" must exists': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#txtFirstName')
  },

  'Field "Email" must exists': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#txtMail')
  },

  'Field "Mot De Passe" must exists': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#txtPassword')
  },
  
  'Checkbox Legal aggrement must exist': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#ckbInvitMailPartner')
  },

  'Button C\'est Parti must exist': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#registerBt')
  },

  'Registration shouldn\t pass': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#registerBt')
      .pause(5000)
      .assert.elementPresent("#CivilityValidate span")
      .assert.elementPresent("#txtFirstNameValidate span")
      .assert.elementPresent("#txtLastNameValidate span")
      .assert.elementPresent("#txtMailValidate span")
      .assert.elementPresent("#txtPasswordValidate span")
      .assert.elementPresent("#CivilityValidate span")
  },

  'Registration should pass': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/registration/registration')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#rbtCivility_1')
      .click('#rbtCivility_1')
      .assert.elementPresent('#txtLastName')
      .setValue('#txtLastName',"testname")
      .assert.elementPresent('#txtFirstName')
      .setValue('#txtFirstName',"testfirstname")
      .assert.elementPresent('#txtMail')
      .setValue('#txtMail',conf.venteprivee_login)
      .assert.elementPresent('#txtPassword')
      .setValue('#txtPassword',conf.venteprivee_pwd)
      .assert.elementPresent('#ckbInvitMailPartner')
      .click('#ckbInvitMailPartner')
      .click("#registerBt")
      .pause(10000)
      .assert.urlEquals("https://secure.fr.vente-privee.com/ns/fr-fr/home/default/classic")
      .assert.elementPresent('#basketBtn')

      browser.end();
  }
}