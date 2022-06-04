import styled from 'styled-components'

 const StyledCard = styled.div`

    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
 
    margin-bottom: 40px;
    padding: 20px;
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    word-break: break-all;
   

    #desc{
        display: flex;
        justify-content: space-between;
    }

    #logo{
        margin-right: 30px;
        width: 100px;
    }

    #description span:nth-child(1){
        color: hsl(180, 29%, 50%);
    }

    #description #new{
        color: #fff;
        background-color: hsl(180, 29%, 50%);
        border-radius: 10px;
        font-size: 14px;
        margin-left: 10px;
        padding: 2px 3px;
        font-weight: bold;
    }

    #description #featured {
        color: #fff;
        background-color: #403e42;
        margin-left: 10px;
        font-size: 12px;
        margin-left: 10px;
        padding: 4px 5px;
        font-weight: bold;
        border-radius: 10px;
    }

    #description #contract, #postedAt, #location{
        color: hsl(180, 8%, 52%);
        padding-right: 7px;
    }

    #description h3:hover{
        color: hsl(180, 29%, 50%);
    }

    #tools span{
       padding-right: 20px;
       background-color: hsl(180, 31%, 95%);
       color: hsl(180, 29%, 50%);
       font-size: 15px;
       font-weight: bold;
       margin-left: 15px;
       text-align: center;
       padding: 5px 10px;
       border-radius: 5px;
    }

    #tools span:hover{
       color: #fff;
       background-color:red;
    }


    &:hover{
        border-left: hsl(180, 29%, 50%) 3px solid;
        cursor: pointer;
    }

    @media (max-width: 1400px){
       flex-direction: column;
       
       #desc{
        margin-bottom: 20px;
        width: 100%; 
        justify-content: flex-start;
     }

     #description #contract, #postedAt, #location{
        display: inline-block;
        margin-top: 10px;
    }

    #tools span{
        display: inline-block;
        margin-top: 10px;
     }

     #tools{
        width: 100%;
     }

    }

    @media (max-width: 710px){
        #desc{
            flex-direction: column; 
            border-bottom: hsl(180, 8%, 52%) 2px solid;
            align-items: left; 
            width: 100%; 
      }
   
      #description #contract, #postedAt, #location{
        margin-bottom: 10px;
     }

     #logo{
        width: 70px;
        position: relative;
         top: -30px;
        
     }
 
     }

`

export default StyledCard