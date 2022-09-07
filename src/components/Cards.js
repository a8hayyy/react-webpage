import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination!</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src="images/img-9.jpg"
                text="Explore teh hidden waterfall deep inside the amazon Jungle"
                lable='Adventure'
                path='/services'
                />
                <CardItem 
                src="images/img-4.jpg"
                text="Explore teh hidden waterfall deep inside the amazon Jungle"
                lable='Adventure'
                path='/services'
                />
                
            </ul>
            <ul className='cards__items'>
                
                <CardItem 
                src="images/img-5.jpg"
                text="Travel through the Island of Bale by a private plane"
                lable='Dream'
                path='/services'
                />
                <CardItem 
                src="images/img-2.jpg"
                text="Travel through the Island of Bale by a private plane"
                lable='Dream'
                path='/services'
                />
                <CardItem 
                src="images/img-1.jpg"
                text="Live into the place of your Dream with all those who matters to you"
                lable='Nature'
                path='/services'
                />
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Cards