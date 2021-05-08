import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';

let card =null;
let stripe=null;

export const frontendStripe=async ()=>{
    
   try{
     stripe = await loadStripe('pk_test_51HnRsfKBj1yaPcx1jPDUUIlXwDGzlkIv0gjMM2rWlhOJLdeicwAVUpf5RDDWlWH07I5U8mx1MWWIl1pVyWFKTqSv002B70Bjve');

    const elements = stripe.elements();
    let style = {
        base: {
            color: "#32325d",
        },
        root:{
            border:"1px solid red"
        }
    };

    card = elements.create("card", { style: style,hidePostalCode:true });
    card.mount("#card-element");

   }catch(err){
       console.log(err);
   }
}

export const mainFrontend=(email,name) =>{
  stripe.createToken(card).then(
    (result)=>{
        const token=result.token.id;
        axios({
            method: 'POST',
            url: '/stripe/backend/',
            data: {
              email,
              name,
              token
            }
          }).then((result)=>{
             console.log("success");
          }).catch((err)=>{
              console.log(err);
          });

    }
  ).catch((err) =>{
      console.log(err);
  });
}

