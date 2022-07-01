import React from 'react'

export default function Question(props) {
  return (

<>

<div  className="card text-center" name="Q1" style={{ backgroundColor:'#728FCE',borderRadius:40, page:1}} page={1}>
  
  <div className="card-body" onsubmit={props.submit}>
    <h1 className="card-title">Customer Survey</h1></div>
    <div>
    <p className="text-align:right">1/5</p></div>
    <div>
    <p className="card-text my-4">1.   How Satisfied are you with our product?</p>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label class="form-check-label" for="inlineRadio3">3</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option3"/>
  <label class="form-check-label" for="inlineRadio4">4</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option3"/>
  <label class="form-check-label" for="inlineRadio5">5</label>
</div>

    
    {/* <div className="container d-flex justify-content-between">
          <button  type="button" className="btn btn-primary" > &larr; Privous</button>
          <button  type="button" className="btn btn-dark"style={{backgroundColor:"#F33A6A"}} > Skip</button>
          <button  type="button" className="btn btn-dark" style={{backgroundColor:"#FF00FF"}} > Next  &rarr;</button>
          </div> */}
          
 
  
</div>
</div>

<div name="Q2" className="card text-center" style={{ backgroundColor:'#728FCE',borderRadius:40, page:2}}page={2}  onsubmit={props.submit}>
  
  <div className="card-body">
    <h1 className="card-title">Customer Survey</h1></div>
    <div>
    <p className="text-align:right">2/5</p></div>
    <div>
    <p className="card-text my-4">2.  How fair are the prices compared to similar retailers?</p>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label class="form-check-label" for="inlineRadio3">3</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option3"/>
  <label class="form-check-label" for="inlineRadio4">4</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option3"/>
  <label class="form-check-label" for="inlineRadio5">5</label>
</div>

    
    {/* <div className="container d-flex justify-content-between">
          <button  type="button" className="btn btn-primary" > &larr; Privous</button>
          <button  type="button" className="btn btn-dark"style={{backgroundColor:"#F33A6A"}} > Skip</button>
          <button  type="button" className="btn btn-dark" style={{backgroundColor:"#FF00FF"}} > Next  &rarr;</button>
      </div> */}
          
 
  
</div>
</div>
<div name="Q3" className="card text-center" style={{ backgroundColor:'#728FCE',borderRadius:40,page:3}}page={3}  onsubmit={props.submit}>
  
  <div className="card-body">
    <h1 className="card-title">Customer Survey</h1></div>
    <div>
    <p className="text-align:right">3/5</p></div>
    <div>
    <p className="card-text my-4">3.  How Satisfied are you with the value for money of your purchase?</p>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label class="form-check-label" for="inlineRadio3">3</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option3"/>
  <label class="form-check-label" for="inlineRadio4">4</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option3"/>
  <label class="form-check-label" for="inlineRadio5">5</label>
</div>

    
    {/* <div className="container d-flex justify-content-between">
          <button  type="button" className="btn btn-primary" > &larr; Privous</button>
          <button  type="button" className="btn btn-dark"style={{backgroundColor:"#F33A6A"}} > Skip</button>
          <button  type="button" className="btn btn-dark" style={{backgroundColor:"#FF00FF"}} > Next  &rarr;</button>
      </div> */}
          
 
  
</div>
</div>


<div name="Q4"className="card text-center" style={{ backgroundColor:'#728FCE',borderRadius:40,page:4}}page={4}  onsubmit={props.submit}>
  
  <div className="card-body">
    <h1 className="card-title">Customer Survey</h1></div>
    <div>
    <p className="text-align:right">4/5</p></div>
    <div>
    <p className="card-text my-4">4. On a Scale of 1-10 how would u recommend us to ur frends and Family?</p>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label class="form-check-label" for="inlineRadio3">3</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
  <label class="form-check-label" for="inlineRadio4">4</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
  <label class="form-check-label" for="inlineRadio5">5</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6"/>
  <label class="form-check-label" for="inlineRadio6">6</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option7"/>
  <label class="form-check-label" for="inlineRadio7">7</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option8"/>
  <label class="form-check-label" for="inlineRadio8">8</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" value="option9"/>
  <label class="form-check-label" for="inlineRadio9">9</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" value="option10"/>
  <label class="form-check-label" for="inlineRadio10">10</label>
</div>

    
    {/* <div className="container d-flex justify-content-between">
          <button  type="button" className="btn btn-primary" > &larr; Privous</button>
          <button  type="button" className="btn btn-dark"style={{backgroundColor:"#F33A6A"}} > Skip</button>
          <button  type="button" className="btn btn-dark" style={{backgroundColor:"#FF00FF"}} > Next  &rarr;</button>
          </div>
           */}
 
  
</div>
</div>

<div name="Q5" className="card text-center" style={{ backgroundColor:'#728FCE',borderRadius:40 ,page:5}}page={5}  onsubmit={props.submit}>
  
  <div className="card-body">
    <h1 className="card-title">Customer Survey</h1></div>
    <div>
    <p className="text-align:right">5/5</p></div>
    <div>
    <p className="card-text my-4">5. what can we do to improve our  service?</p></div>
    <div className=" cointener mx-auto form-floating">
    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{width:"50rem"}}></textarea>
    <label for="floatingTextarea">Comments</label>
    </div>
    
{/*     
    <div className="container d-flex justify-content-between">
        <button  type="button" className="btn btn-primary" > &larr; Privous</button>
          // <button  type="button" className="btn btn-dark"style={{backgroundColor:"#F33A6A"}} > Submit</button>
          <button  type="button" className="btn btn-dark" style={{backgroundColor:"#FF00FF"}} > Next  &rarr;</button> */}
          
          
         <div className="container d-flex justify-content-center"><button  type="button" className="btn btn-dark"style={{backgroundColor:"#F33A6A"}} > Submit</button> </div>   
  
</div>

{/* </div> */}



</>
      
    
  )
}
