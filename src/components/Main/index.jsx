import {Component} from 'react'
import { Container } from './style'
import main from '../../assets/imgs/main.jpeg'
import kredit from '../../assets/imgs/kredit.jpeg'
import stars from '../../assets/imgs/stars.jpeg'
import karta from '../../assets/imgs/karta.jpeg'
import depozit from '../../assets/imgs/depozit.jpeg'
import komissiya from '../../assets/imgs/komissiya.jpeg'

const Main = () => {
  return (
    <Container>
    <div className='mainpage'>

      <div >
    <h3>TBC — Oʻzbekistondagi raqamli birinchi bank</h3>
    <h1>Hayotingizni osonlashtiramiz</h1>
    <h2>Ilovani yuklab oling — bank doim yoningizda boʻlsin.</h2>
    <h4>Raqamingizni kiriting — ilovani yuklab olishingiz uchun sizga havola joʻnatiladi</h4>
    <input type="text" />
    <button>Havolani olish</button>
    <div>
    <input type="radio" />
    <p> Bilan roziman   </p>
    <a href="#">Xizmat ko'rsatish shartlari </a>
    </div>
    {/* <div className="icons">
      <div>
         <button>
          <i class="fa-brands fa-google-play"></i>
         </button>
        <div className='des'>
          <h5>Android</h5>
          <p>uchun yuklab olish</p>
        </div>
      </div>
      <div>
         <button>
          <i class="fa-brands fa-apple"></i>
         </button>
        <div className='des'>
          <h5>IOS</h5>
          <p>uchun yuklab olish</p>
        </div>
      </div>
    </div> */}

     <div className="socials">
        <button className="btn">
         <i class="fa-brands fa-google-play"></i>
              
         </button> 
          <div>
            <h3>Android</h3>
            <p> uchun yuklab olish</p>
            </div>   
        <button className="btn">
           <i class="fa-brands fa-apple"></i>
             
         </button>
         <div>
            <h3>IOS</h3>
            <p> uchun yuklab olish</p>
            </div>
      </div>
      </div>
      <img className='main' src={main} alt="" />
    </div>

      <div className="stars">
        <img className='main' src={kredit} alt="" />
        <div>
          <h2> TBC Stars. Har oy sovrinlarga <br /> ega boʻling</h2>
          <h3> TBC UZ ilovasidan faol foydalaning, <br /> bonuslarni toʻplab, sovrinlar, masalan, <br /> iPhone 12 yutib oling.</h3>
          <a href="#"> Konkurs haqida batafsil</a>
          <img className='stars' src={ stars} alt="" />
        </div>
      </div>

      <div className="karta">
        <img src={karta } alt="" />
        <div>
          <h2> TBC bank kartasi</h2>
          <h3> Ilova orqali buyurtma bering. Karta 1-3 kun ichida bepul <br /> yetkazib beriladi.</h3>
          <a href="#"> Karta haqida batafsil</a>
         </div>
      </div>

      <div className="mainpage">
        <div>
          <h2> TBC Stars. Har oy sovrinlarga <br /> ega boʻling</h2>
          <h3> TBC UZ ilovasidan faol foydalaning, <br /> bonuslarni toʻplab, sovrinlar, masalan, <br /> iPhone 12 yutib oling.</h3>
          <a href="#"> Konkurs haqida batafsil</a>
          <img className='stars ' src={ depozit} alt="" />
        </div>
        <img className=' main' src={komissiya} alt="" />
      </div>
    </Container>
  )
}

export default Main
