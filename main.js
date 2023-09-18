let cards = [ {
    person: 'Ahmed Morad',
    img:'images/ernest-flowers-hvUN_c753_M-unsplash.jpg',
    job: 'front-end',
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vitae voluptas facilis qui dolore fugiat vel aut a! Veniam omnis quam similique dolorum, quibusdam sed modi error eum exercitationem quae.',
},
    {
        person: 'Sayed Mohamed',
        img:'images/ernest-flowers-lrcTvNUrhUc-unsplash.jpg',
    job: 'engineer',
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem impedit eum suscipit autem modi rerum minima blanditiis alias vero accusamus! Obcaecati, sequi aut? Excepturi necessitatibus laboriosam exercitationem voluptatibus sunt. Inventore!',
},
{
    person: 'Mosaad Ahmed',
    img:'images/marvin-cors-5Oq4y7Yx3DM-unsplash.jpg',
    job: 'Architecture',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore magnam nesciunt dolor voluptatem vitae ipsam totam delectus nihil voluptate. Ducimus, adipisci dolores quia blanditiis numquam illum itaque dolor saepe.',
},
{
    person: 'Samer hassan',
    img:'images/sandro-g-photography-pY5R_Rrions-unsplash.jpg',
    job:'engineer',
    info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus consequatur et qui fugiat accusantium distinctio odit recusandae, hic rerum harum labore velit culpa assumenda sunt cumque dolor, libero amet.',
    }, ]
    
let next = document.querySelector( ".fa-chevron-right" );

let prev = document.querySelector( ".fa-chevron-left" );

let info = document.querySelector( ".info" ); 

let name = document.querySelector( ".name" );

let job = document.querySelector( ".job" );

let img = document.querySelector( "img" );

let count = 0;

function card ()
{
    let item = cards[ count ];

    job.textContent = item.job;

    img.src = item.img

    info.textContent = item.info;

    name.textContent = item.person;
};

function plus ()
{
    count++;

    if ( count > cards.length - 1 )
    {
        count = 0;
    }

    card();
};

function min ()
{
    count--;

    if ( count < 0 )
    {
        count = cards.length -1
    }

    card();
};

next.onclick = plus;

prev.onclick = min;
