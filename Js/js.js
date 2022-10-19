
let main = document.querySelector('.mains');




fetch('https://jsonplaceholder.typicode.com/comments?postId=1').then((re) =>{
    console.log(re)
    return re.json()
}).then((respoe) => {
    console.log(respoe.length)
    let post;
    
    for(let i = 0; i < respoe.length; i++ ){
         post += `
        <div class="content">
        <div class="maiNuser">
            <img src="imges/avatar-05.png" alt="">
            <div class="neme">
                <span>${respoe[i].name}</span>
                <span>${respoe[i].email}</span>     
            </div>
        </div>
        <div class="post">
            <p>
            ${respoe[i].body}
                </p> 
                <div class="time">2:40 PM . Sep 1, 2022 .Sprinklr</div>
                <div class="Watch"><div><span>48.9K</span> Retweets</div> <div><span>58.5K</span> Quote Tweets</div>  <div><span>370.7K</span> Likes</div></div>
                <div class="icons">
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-solid fa-retweet"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-share-from-square"></i>
    
                </div>
        </div>
    </div>
        
        `
    main.innerHTML = post
    }
    });

    


















// fetch('https://jsonplaceholder.typicode.com/comments').then((re) =>{
//     console.log(re)
//     return re.json()
// }).then((respoe) => {
//     for(let i = 0; i < 100; i++){
//     console.log(respoe[i].name)

//     }

// })
