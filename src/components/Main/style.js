import styled from "styled-components";


export const Container = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 50px;

.mainpage{
  display: flex; 
  justify-content: space-between;
}
.main{
    width: 694px;
    height: 700px;
    /* object-fit: cover; */
    object-position: top;
    border-radius: 24px;
}

.socials{
  display: flex;

  .des{
    display: flex;
    flex-direction: column;
  }
  button{
  }
  i{
    font-size: 30px;
    
  }
}

.btn{
  display: flex;
  align-items: center;
  justify-content:center ;
  width: 60px;
  height: 60px;
  /* margin-top: 30px; */
  border-radius: 15px;
  background-color:white;
}

.stars{
  margin-top: 100px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;

  div{
    border: 1px #E5E5E5 solid;
    border-radius: 20px;
    padding: 50px;

    
  }
  a{
      margin-top: 150px;
    }
    .stars{
      width: 436px;
      height: 236px;
      position: relative;
      left: 50px;
      top: 115px;
      border-top-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
}

.karta{
  display: flex;
  /* justify-content: space-between; */
  margin-top: 100px;

  div{
    border: 1px #E5E5E5 solid;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 120px;
  }
  img{
    width: 600px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
  }








`





