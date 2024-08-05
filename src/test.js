function Test() {
    
     var test = {
          title : "object test"
        , content : 
        `
            <div>div 테스트</div>
            <div class ="test" style="color:blue">css 테스트</div>
        `
     }

   document.body.innerHTML = 
   `
      <div>${test.title}</div>
      <div>${test.content}</div>
   
   `
}

export default Test;