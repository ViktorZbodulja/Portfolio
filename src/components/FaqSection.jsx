import React from 'react'

function FaqSection() {
  return (
    <div className='faq'>
        <h2>Any Questrions <span>FAQ</span></h2>
        <div className='question'>
            <h4>How do I start?</h4>
            <div className='answer'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque?</p>
            </div>
        </div>
        <div className='question'>
            <h4>Payment methods</h4>
            <div className='answer'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque?</p>
            </div>
        </div>
        <div className='question'>
            <h4>Daily Schedule</h4>
            <div className='answer'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque?</p>
            </div>
        </div>

    </div>
  )
}

export default FaqSection