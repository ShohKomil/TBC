import {Component} from 'react'
import { Container } from './style'
import {Logo} from './style'

const Header = () => {
  return (
    <Container>
      <header>
        <div> <Logo/> </div>
        <nav>
          <h3>Mahsulotlar</h3>
          <h3>Biz haqimizda</h3>
          <h3>Helloblog</h3>
        </nav>
        
        <div className="btns">
          <select name="" id="">
          <option value="">Uz</option>
          <option value="">Ru</option>
        </select>
          <button className='btn'>
            <i class="fa fa-volume-up" aria-hidden="true"></i>
          </button>
          <button className='btn'><i class="fa fa-eye" aria-hidden="true"></i>
          </button>
          <button className='btn'>
          <i class="fa fa-search" aria-hidden="true"></i>
          </button>
          <button className='blue-btn'>Ilovani yuklab olish</button>
        </div>
      </header>
    </Container>
  )
}

export default Header
