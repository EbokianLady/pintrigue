import React from 'react';

function Test() {
  return (
    <div className='test-buffer'>
      <div className='container' >
        {/* <div className='grid-el' style={{ 'height': '150px'}}>Test1</div>
        <div className='grid-el' style={{ 'height': '350px'}}>Test2</div>
        <div className='grid-el' style={{ 'height': '250px'}}>Test3</div>
        <div className='grid-el' style={{ 'height': '250px'}}>Test4</div>
        <div className='grid-el' style={{ 'height': '150px'}}>Test5</div>
        <div className='grid-el' style={{ 'height': '350px'}}>Test6</div>
        <div className='grid-el' style={{ 'height': '350px'}}>Test7</div>
        <div className='grid-el' style={{ 'height': '250px'}}>Test8</div>
        <div className='grid-el' style={{ 'height': '150px'}}>Test9</div>
        <div className='grid-el' style={{ 'height': '350px'}}>Test10</div> */}
        
        <div className='grid-el' style={{ 'height': '150px', 'grid-row-end': 'span 16'}}>Test1</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test2</div>
        <div className='grid-el' style={{ 'height': '250px', 'grid-row-end': 'span 26'}}>Test3</div>
        <div className='grid-el' style={{ 'height': '250px', 'grid-row-end': 'span 26'}}>Test4</div>
        <div className='grid-el' style={{ 'height': '150px', 'grid-row-end': 'span 16'}}>Test5</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test6</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test7</div>
        <div className='grid-el' style={{ 'height': '250px', 'grid-row-end': 'span 26'}}>Test8</div>
        <div className='grid-el' style={{ 'height': '150px', 'grid-row-end': 'span 16'}}>Test9</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test10</div>
        <div className='grid-el' style={{ 'height': '150px', 'grid-row-end': 'span 16'}}>Test1</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test2</div>
        <div className='grid-el' style={{ 'height': '250px', 'grid-row-end': 'span 26'}}>Test3</div>
        <div className='grid-el' style={{ 'height': '250px', 'grid-row-end': 'span 26'}}>Test4</div>
        <div className='grid-el' style={{ 'height': '150px', 'grid-row-end': 'span 16'}}>Test5</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test6</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test7</div>
        <div className='grid-el' style={{ 'height': '250px', 'grid-row-end': 'span 26'}}>Test8</div>
        <div className='grid-el' style={{ 'height': '150px', 'grid-row-end': 'span 16'}}>Test9</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test10</div>
        <div className='grid-el' style={{ 'height': '150px', 'grid-row-end': 'span 16'}}>Test1</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test2</div>
        <div className='grid-el' style={{ 'height': '250px', 'grid-row-end': 'span 26'}}>Test3</div>
        <div className='grid-el' style={{ 'height': '250px', 'grid-row-end': 'span 26'}}>Test4</div>
        <div className='grid-el' style={{ 'height': '150px', 'grid-row-end': 'span 16'}}>Test5</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test6</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test7</div>
        <div className='grid-el' style={{ 'height': '250px', 'grid-row-end': 'span 26'}}>Test8</div>
        <div className='grid-el' style={{ 'height': '150px', 'grid-row-end': 'span 16'}}>Test9</div>
        <div className='grid-el' style={{ 'height': '350px', 'grid-row-end': 'span 36'}}>Test10</div>
      </div>
    </div>
  )
}

export default Test;