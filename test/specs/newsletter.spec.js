

describe('OV-30 - Newsletter subscription', () => {
    before(() => {
        
        browser.url('http://czechitas-datestovani-hackathon.cz')  // open the website
      
    })

    it('newsletter subscription', () => {

    
      let newsletterInput = $('#newsletter-input')
      
   
      newsletterInput.setValue(`mujemail+${Math.floor(Math.random()*100000)}@gmail.com`)
     
     $('.btn.button.button-medium.newsletter-btn').click()

     expect($('p.alert.alert-success')).toHaveText('Newsletter : A verification email has been sent. Please check your inbox.')

      })


     
})