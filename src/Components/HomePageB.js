import React from "react"


const HomePageB = () => {

  return (
    <div className = "homePageB">
        <div className = "b-header"> The best care for all of your plants </div>

        <div className = 'service-item a'>
          <i className = 'leaf-icon'>&#x2619;</i>
          <label className="service-title">House Calls</label>
          <div className = 'service-desc'> Sitters that come to your home </div>
        </div>

        <div className = 'service-item b'>
          <i className = 'leaf-icon'>&#x2619;</i>
          <label className="service-title">Certified Sitters</label>
          <div className = 'service-desc'> Comprehensive background checks for all sitters </div>
        </div>

        <div className = 'service-item c'>
          <i className = 'leaf-icon'>&#x2619;</i>
          <label className="service-title">Expert care</label>
          <div className = 'service-desc'> Only the most passionate plant people </div>
        </div>


        <div className = 'guarantee-panel'>
            <div className = 'panel-header'> <div className = 'panel-title'> I swear to freaking <strong>GOD</strong> our sitters are legit </div></div>
            <div className = 'panel-body'>
              <div className ='panel-text'> <i className = 'check'>&#x2713;</i>Basic background checks</div>
              <div className ='panel-text'> <i className = 'check'>&#x2713;</i>Sitters provide extensive personal info when applying</div>
              <div className ='panel-text'> <i className = 'check'>&#x2713;</i>Each sitter is approved personally by our founder</div>
              <a href = '/sitters' className = 'panel-button'> BOOK A SITTER RIGHT NOW, DAMNIT </a>
            </div>
        </div>

        <div className = 'panel-footer'> All services booked on Plantsitter are backed by the Plantsitter Guarantee, 24/7 Support, Photo Updates, and our Reservation Protection. </div>

    </div>
  )

}

export default HomePageB
