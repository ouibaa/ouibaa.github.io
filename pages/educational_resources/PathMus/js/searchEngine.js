var options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "Abbot",
      "Title.title1",
      "Title.title2",
      "Link"
    ]
  };
var fuse = new Fuse(list, options); // "list" is the item array

function searchEngine(e){
  
    let input = document.getElementById('search-input');
    let html = '';
    let matchingResults = [];
    let heading = document.querySelector('.search-heading');
    
  //   Find Matching Results
    if(input.value === ''){
      
      searchResults.forEach(function(obj){
        heading.textContent = 'Search results';
        
        if(obj.frequent === true){
          matchingResults.push(obj);
        }
        })
    } else {
      
      heading.textContent = 'Search Results';
      var result = fuse.search(input.value).slice(0, 5)
      result.forEach(function(obj){
          matchingResults.push(obj);
          
      })
    }
    
  
  
    if(matchingResults.length > 0){
  
      matchingResults.forEach(function(el){
        var combinedString = el.Abbot+" : "+ el.Title.title1 + ", "+el.Title.title2
        html += `<li><a class="grey-text" href="#" onclick="javascript:loadSection('${el.Link}')">${boldString(combinedString, input.value)}</a></li>`
      })
      document.querySelector('.popup-list').innerHTML = html;
    } else{
      html = `<li>There are no suggestions for your query.</li>`
      document.querySelector('.popup-list').innerHTML = html;
    }
  
  }

  function boldString(str, find){
    var re = new RegExp(find, 'i');
    find = re.exec(str);
    return str.replace(re, '<b>'+find+'</b>');
  }
