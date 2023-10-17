function getRandomCocktail(){
     var request = new XMLHttpRequest()
     var div = document.getElementById('cocktail')



     request.onreadystatechange = function(){
     if(request.readyState == 4){
        var response =JSON.parse(request.responseText)['meals'][0]
        div.innerHTML = ''


        var name = document.createElement('h2')
        name.innerHTML = response['strMeal']
        name.style.fontFamily = 'san-serif'
        div.appendChild(name)

        var img = document.createElement('img')
        img.src = response['strMealThumb']
        img.style.width = '400px'
        div.appendChild(img)

         var instruction = document.createElement('p')
        instruction.innerHTML = response['strInstructions']
        instruction.style.fontFamily = 'san-serif'
        instruction.style.fontSize = '30px'
        div.appendChild(instruction)

        for(var i =1 ;i<16;i++){
            if(response['strIngredient' + i]){
                var ingredient = document.createElement('p')
                ingredient.innerHTML = response['strIngredient' + i] + ' - ' + response['strMeasure' + i]
                ingredient.style.fontFamily = 'san-serif'
                ingredient.style.fontSize = '30px'
                div.appendChild(ingredient)
        }
        else{
        break
        }

}
       const videoIframe = document.createElement('iframe');
       videoIframe.width = 330;
    videoIframe.height = 200;
    var src = response['strYoutube']
    videoIframe.src = "https://www.youtube.com/embed/"+ src.slice(32)
    videoIframe.frameborder = 0;
    videoIframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    videoIframe.allowfullscreen = true;
    div.appendChild(videoIframe)
    }

    else{
            div.innerHTML = '<img src = "icegif-1262.gif">'
        }
     }
   var url = 'https://www.themealdb.com/api/json/v1/1/random.php'
   request.open('get',url,true)
   request.send()
}