

describe('OV-32  displeyed our menu in hamburger button menu will consist links', () => {
    beforeEach(() => {

        browser.url('http://czechitas-datestovani-hackathon.cz')  // open the website

        $('.nav_toggle').click()  // open hamburger menu
        browser.pause(1000)
    })

    it('open button hamburger', () => {


        expect($('.menu_cont_left')).toBeDisplayedInViewport()  // expect open hamburger menu


    })

    it('button HOME exist and leads to the corresponding section', () => {


        expect($$('.navigation-link')[0]).toHaveText('Home')
        $$('.navigation-link')[0].click()
        expect($('h1*=Three foxes lounge')).toBeDisplayedInViewport()

    })

    it('button Interior exist and leads to the corresponding section', () => {


        expect($$('.navigation-link')[1]).toHaveText('Interior')
        $$('.navigation-link')[1].click()


        expect($('p*=Interior')).toBeDisplayedInViewport()

    })

    it('button Amenities exist and leads to the corresponding section', () => {


        expect($$('.navigation-link')[2]).toHaveText('Amenities')
        $$('.navigation-link')[2].click()


        expect($('p*=Amenities')).toBeDisplayedInViewport()

    })

    it('button Rooms exist and leads to the corresponding section', () => {


        expect($$('.navigation-link')[3]).toHaveText('Rooms')
        $$('.navigation-link')[3].click()


        expect($('p*=Our Rooms')).toBeDisplayedInViewport()

    })


    it('button Testimonials exist and leads to the corresponding section', () => {


        expect($$('.navigation-link')[4]).toHaveText('Testimonials')
        $$('.navigation-link')[4].click()

        browser.pause(2000)
        expect($('#hotelTestimonialBlock')).toBeDisplayedInViewport()

    })

    it('button Legal Notice exist and leads to the corresponding section', () => {

        expect($$('.navigation-link')[5]).toHaveText('Legal Notice')
        $$('.navigation-link')[5].click()


        expect($$('h2*=Legal')).toBeDisplayedInViewport()

    })

    it('button About us exist and leads to the corresponding section', () => {

        expect($$('.navigation-link')[6]).toHaveText('About us')
        $$('.navigation-link')[6].click()


        expect($('h1')).toBeDisplayedInViewport()
        expect($('h1')).toHaveText('ABOUT US')

    })
    it('button Contact exist and leads to the corresponding section', () => {

        expect($$('.navigation-link')[7]).toHaveText('Contact')
        $$('.navigation-link')[7].click()


        expect($('p*=Contact Us')).toBeDisplayedInViewport()

    })

    it('close menu hamburger', () => {

        $('.icon-close').click()

        browser.pause(1000)
        expect($('.icon-close')).not.toBeDisplayedInViewport()

    })
})