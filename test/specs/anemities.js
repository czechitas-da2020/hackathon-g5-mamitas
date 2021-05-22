
describe('Main section of home page', () => {

    before(() => {
        
        browser.url('http://czechitas-datestovani-hackathon.cz') 

       
    })
   
     
    it('has correct header', () => {
        expect($$('.header-hotel-name')).toHaveText('Three foxes lounge');
    })

    it('has correct search form', () => {
        expect($$('#search_room_submit')).toExist
    })


    it('has correct text interior section', () => {
        expect($$('#hotelInteriorBlock p.home_block_heading')).toHaveText('Interior');
    })

    it.only('has correct amenities section', () => {
   
        expect($('#hotelAmenitiesBlock p.home_block_heading')).toHaveText('Amenities');
        
    })

    it.only('has correct amenities section', () => {
   
       
        expect($('.homeAmenitiesBlock.home_block_content')).toHaveText('Luxurious Rooms');

    })
    it('has correct amenities section', () => {
   
        
        expect($('div.amenity_desc_primary p.amenity_heading')).toHaveText('From the campfire to your table');
        
    })
    it('has correct amenities section', () => {
   
       
        expect($('div.amenity_desc_primary p.amenity_heading')).toHaveText('Cosy Pub');
        
        it('has correct amenities section', () => {
   
      
            expect($('div.amenity_desc_primary p.amenity_heading')).toHaveText('Sauna&Whirpool');
        })
    })

    it('has correct Our Rooms section', () => {
   
        expect($('#hotelRoomsBlock p.home_block_heading')).toHaveText('Our Rooms');

    })

        it('has correct What Our Guest Say Section', () => {
   
            expect($('#hotelTestimonialBlock p.home_block_heading')).toHaveText('What Our Guest Say?');
        
    })

    it('has correct Footer section', () => {
   
        expect($('.footer-container')).toexist
    
})
    
})