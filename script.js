
const myWorksArray = [
    {
        id:1,
        pic:"./works-imgs/im1.png",
        link: 'https://www.figma.com/proto/MO1PsMmkbuJ00fSJ2WW968/Gal-Perlmutter-Portfolio?page-id=0%3A1&node-id=100%3A14770&viewport=-534%2C1466%2C0.13&scaling=min-zoom&starting-point-node-id=54%3A2689'
    },
    {
        id:2,
        link:'https://www.figma.com/proto/MO1PsMmkbuJ00fSJ2WW968/Gal-Perlmutter-Portfolio?page-id=281%3A12305&node-id=90%3A3897&viewport=-1598%2C2930%2C0.25&scaling=scale-down-width&starting-point-node-id=90%3A3897',
        pic:"./works-imgs/im2.png",

    },
    {
        id:3,
        link:'https://www.figma.com/proto/MO1PsMmkbuJ00fSJ2WW968/Gal-Perlmutter-Portfolio?page-id=58%3A2994&node-id=90%3A7062&viewport=-901%2C1467%2C0.13&scaling=scale-down-width&starting-point-node-id=90%3A7062',
        pic:"./works-imgs/im3.png",

    }
];


const init = ()=>{

    const htmlWorksArrayPreview =  myWorksArray.map((currWork)=>{
        return  `
              <div class="col-lg-4 col-sm-6 mb-4"   >
                   <div class="portfolio-item">
                               <a class="portfolio-link" href="${currWork.link}"  target="_blank">
                                   <img class="img-fluid" src="${currWork.pic}" alt="${currWork.name}" />
                               </a>
                   </div>
               </div>
    `
    })
    document.getElementsByClassName('works-go-here')[0].innerHTML = htmlWorksArrayPreview.join('');

   
}