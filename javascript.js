//"https://meme-api.com/gimme/wholesomememes"

 const memegeneratorbtn = document.querySelector(".meme-generator .mem-btn");
 const memegeneratorimg = document.querySelector(".meme-generator img");
 const memegeneratortitle = document.querySelector(".meme-generator .meme-title");
 const memegeneratorauthor = document.querySelector(".meme-generator .meme-author");

  //setting data to html tags by using function
  const updatedetails=(url,title,author)=>{
    memegeneratorimg.setAttribute('src',url);
   memegeneratortitle.innerHTML=title;
   memegeneratorauthor.innerHTML=`Meme by: ${author}`;
 }

//fetching data from url
 const generatememe=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
     .then((response)=>{
        console.log(response)
         return response.json()
     }).then((data)=>{
          updatedetails(data.url,data.title,data.author);
    })

    
 }

 memegeneratorbtn.addEventListener("click",generatememe);
 generatememe(); 

// const generateMemeBtn = document.querySelector(
//     ".meme-generator .mem-btn"
//   );
//   const memeImage = document.querySelector(".meme-generator img");
//   const memeTitle = document.querySelector(".meme-generator .meme-title");
//   const memeAuthor = document.querySelector(".meme-generator .meme-author");
  
//   const updateDetails = (url, title, author) => {
//     memeImage.setAttribute("src", url);
//     memeTitle.innerHTML = title;
//     memeAuthor.innerHTML = `Meme by: ${author}`;
//   };
  
//   const generateMeme = () => {
//     fetch("https://meme-api.com/gimme/wholesomememes")
//       .then((response) => response.json())
//       .then((data) => {
//         updateDetails(data.url, data.title, data.author);
//       });
//   };
  
//   generateMemeBtn.addEventListener("click", generateMeme);
  
//   generateMeme();