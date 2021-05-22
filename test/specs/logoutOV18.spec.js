const templatePage = require('../pages/template.page')

describe('Log OUt - OV18 - user', () => {
    before(() => {
        
        browser.url('http://czechitas-datestovani-hackathon.cz')  // open the website
      
    })

    it('log in', () => {

        let login = 'monika.nov@gmail.com'
        let password = 'MonikaNov123'
        let logInButton = $('#SubmitLogin')
   
        $('.hide_xs').click()
     
       $('#email').setValue(login)
       $('#passwd').setValue(password)
        logInButton.click()


       expect($('.page-heading')).toHaveText('MY ACCOUNT')

        })


      it('log out', () => {


        $('#user_info_acc').click()
        browser.pause(2000)
        $('.header_user_info [title="Log me out"]').click()
        browser.pause(2000)
        expect($('.page-heading')).toHaveText('AUTHENTICATION')
    
        })
})