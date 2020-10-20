const baseURL= 'http://api.nytimes.com/svc'





















         //1                     //2   
searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3

                    //1
                    function fetchResults(e) {
                        console.log(e); //2
                        // Assemble the full URL
                        url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
                        console.log(url); //4
                      }
                      
                      function nextPage(){
                        console.log("Next button clicked");
                      } //5
                      
                      function previousPage(){
                        console.log("Next button clicked");
                      } //5



    fetch(url)
    .then(function(result) {
    return fetchResults.json ();
    }).then (function(json) {
        displayResults(json)
    })                     








function displayResults(json){
    let articles =json.response.docs;
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    if(articles.length === 10){
        nav.style.display ='block';
    } else{
        nav.style.display ='name';
    } 
        

    if(articles.length === 0) {
        console.log("No results");
    } else {
        for (let i = 0; i < articles.length; i++) {
            let article =document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para= document.createElement('p');
            let clearfix= document.createElement('div');
         }
    }


let current = articles[i];
console.log()

















































clearfix.setAttribute('class', 'clearfix');


article.appendChild(heading);
heading.appendChild(link);
article.appendChild(img);
article.appendChild()