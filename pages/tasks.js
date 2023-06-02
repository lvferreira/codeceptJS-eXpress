const { I } = inject();

module.exports = {

  // insert your locators and methods here

  create: function (taskName) {
    I.amOnPage('/')

    I.fillField('#newTask', taskName)
    I.click('Create')
  },

  have: function (taskName) {
    I.see(taskName, '.task-item')
  },

  popUp: function (text) {
    I.see(text, '#swal2-html-container')
  }
}
