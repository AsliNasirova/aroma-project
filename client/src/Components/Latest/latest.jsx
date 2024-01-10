import React from 'react'
import './latest.scss'

function Latest() {
  return (
    <section id='latest'>
    <div className='latest_container'>
    <div className="title_latest">
        <p>Popular Item in the market</p>
        <h4>Latest News</h4>
    </div>
    <div className="card_container">
    <div className="card">
        <div className="card_img">
            <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png" alt="" />
        </div>
        <div className="text_card">
            <div className="title_text_card">
            <p>By Admin</p>
            <p>2 comments</p>
            </div>
            <div className="text_card_down">
            <h4>The Richland Center Shooping News and weekly shooper</h4>
            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
            </div>
            <a href="Read More">Read More</a>
        </div>
    </div>
    <div className="card">
        <div className="card_img">
            <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png" alt="" />
        </div>
        <div className="text_card">
            <div className="title_text_card">
            <p>By Admin</p>
            <p>2 comments</p>
            </div>
            <div className="text_card_down">
            <h4>The Richland Center Shooping News and weekly shooper</h4>
            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
            </div>
            <a href="Read More">Read More</a>
        </div>
    </div>
    <div className="card">
        <div className="card_img">
            <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png" alt="" />
        </div>
        <div className="text_card">
            <div className="title_text_card">
            <p>By Admin</p>
            <p>2 comments</p>
            </div>
            <div className="text_card_down">
            <h4>The Richland Center Shooping News and weekly shooper</h4>
            <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p></div>
            <a href="Read More">Read More</a>
        </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Latest