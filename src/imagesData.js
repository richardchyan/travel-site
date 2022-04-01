import beach from './images/beach.jpg'
import beach2 from './images/beach2.jpg'
import beach3 from './images/beach3.jpg'
import beach4 from './images/beach4.jpg'
import beach5 from './images/beach5.jpg'
import beach6 from './images/beach6.jpg'
import beach7 from './images/beach7.jpg'

const imagesData = [
   {
      id: 1,
      image: beach,
      tagline: 'A bit of warmth',
      description: ' Heat up your feet and everything else'
   }, 
   {
      id: 2,
      image: beach2,
      tagline: 'Let yourself go',
      description: 'We\'ve found some great fares to some of your most loved places'
   }, 
   {
      id: 3,
      image: beach3,
      tagline: 'Made to Travel',
      description: 'It\'s just so nice to get out there. So let\'s go'
   }, 
   {
      id: 4,
      image: beach4,
      tagline: 'City Views',
      description: ' So much to see, so much to do'
   }, 
   {
      id: 5,
      image: beach5,
      tagline: 'Looks Like a Dream',
      description: 'A little look at 2022\'s dream destinations'
   }, 
   {
      id: 6,
      image: beach6,
      tagline: ' Looks Like a Dream',
      description: ' Heat up your feet and everything else'
   }, 
   {
      id: 7,
      image: beach7,
      tagline: 'A bit of warmth',
      description: ' A little look at 2022\'s dream destinations'
   }, 
]

console.log(imagesData.slice(0,1))

export default imagesData

// imagesData.slice(0, 3).map(image => {
//    return (
//      <div className="sm:pl-2" key={image.id}>
//        <img src={image.image} alt="Beach" className="rounded-lg" />
//        <div className="text-left">
//          <p className="text-xs uppercase font-light pt-2 pb-1">
//            {image.tagline}
//          </p>
//          <p className="text-md font-semibold">
//            {image.description}
//          </p>
//        </div>
//      </div>
//    );
// })


