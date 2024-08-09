let offers=document.getElementById("offers")
offers.onclick=function(){
    let price1=document.getElementById("price1")
    let price2=document.getElementById("price2")
    let price3=document.getElementById("price3")
    let price4=document.getElementById("price4")
    let price5=document.getElementById("price5")
    let price6=document.getElementById("price6")
    let price7=document.getElementById("price7")
    let price8=document.getElementById("price8")
    let price9=document.getElementById("price9")
    let price10=document.getElementById("price10")
    let price11=document.getElementById("price11")
    let price12=document.getElementById("price12")
    let offer1=document.getElementById("offer1");
    let offer2=document.getElementById("offer2");
    let offer3=document.getElementById("offer3");
    let offer4=document.getElementById("offer4");
    let offer5=document.getElementById("offer5");
    let offer6=document.getElementById("offer6");
    let offer7=document.getElementById("offer7");
    let offer8=document.getElementById("offer8");
    let offer9=document.getElementById("offer9");
    let offer10=document.getElementById("offer10");
    let offer11=document.getElementById("offer11");
    let offer12=document.getElementById("offer12");

    
    price1.style.textDecoration="line-through"
    price2.style.textDecoration="line-through"
    price3.style.textDecoration="line-through"
    price4.style.textDecoration="line-through"
    price5.style.textDecoration="line-through"
    price6.style.textDecoration="line-through"
    price7.style.textDecoration="line-through"
    price8.style.textDecoration="line-through"
    price9.style.textDecoration="line-through"
    price10.style.textDecoration="line-through"
    price11.style.textDecoration="line-through"
    price12.style.textDecoration="line-through"
    offer1.innerHTML=200
    offer2.innerHTML=200
    offer3.innerHTML=200
    offer4.innerHTML=300
    offer5.innerHTML=300
    offer6.innerHTML=300
    offer7.innerHTML=300
    offer8.innerHTML=300
    offer9.innerHTML=1000
    offer10.innerHTML=500
    offer11.innerHTML=700
    offer12.innerHTML=1300
    
}
let all=document.getElementById("all")
all.onclick=function(){
    let men1=document.getElementById("men-1")
    let men2=document.getElementById("men-2")
    let men3=document.getElementById("men-3")
    let men4=document.getElementById("men-4")
    let women1=document.getElementById("women-1")
    let women2=document.getElementById("women-2")
    let women3=document.getElementById("women-3")
    let women4=document.getElementById("women-4")
    let babys1=document.getElementById("babys-1")
    let babys2=document.getElementById("babys-2")
    let babys3=document.getElementById("babys-3")
    let babys4=document.getElementById("babys-4")

    women1.style.display="block"
    women2.style.display="block"
    women3.style.display="block"
    women4.style.display="block"
    babys1.style.display="block"
    babys2.style.display="block"
    babys3.style.display="block"
    babys4.style.display="block"
    men1.style.display="block"
    men2.style.display="block"
    men3.style.display="block"
    men4.style.display="block"
}
let men=document.getElementById("men");
men.onclick=function(){
    let men1=document.getElementById("men-1")
    let men2=document.getElementById("men-2")
    let men3=document.getElementById("men-3")
    let men4=document.getElementById("men-4")
    let women1=document.getElementById("women-1")
    let women2=document.getElementById("women-2")
    let women3=document.getElementById("women-3")
    let women4=document.getElementById("women-4")
    let babys1=document.getElementById("babys-1")
    let babys2=document.getElementById("babys-2")
    let babys3=document.getElementById("babys-3")
    let babys4=document.getElementById("babys-4")
    
    women1.style.display="none"
    women2.style.display="none"
    women3.style.display="none"
    women4.style.display="none"
    babys1.style.display="none"
    babys2.style.display="none"
    babys3.style.display="none"
    babys4.style.display="none"
    
    men1.style.display="block"
    men2.style.display="block"
    men3.style.display="block"
    men4.style.display="block"

    
}
let women=document.getElementById("women");
women.onclick=function(){
    let men1=document.getElementById("men-1")
    let men2=document.getElementById("men-2")
    let men3=document.getElementById("men-3")
    let men4=document.getElementById("men-4")
    let women1=document.getElementById("women-1")
    let women2=document.getElementById("women-2")
    let women3=document.getElementById("women-3")
    let women4=document.getElementById("women-4")
    let babys1=document.getElementById("babys-1")
    let babys2=document.getElementById("babys-2")
    let babys3=document.getElementById("babys-3")
    let babys4=document.getElementById("babys-4")

    men1.style.display="none"
    men2.style.display="none"
    men3.style.display="none"
    men4.style.display="none"
    babys1.style.display="none"
    babys2.style.display="none"
    babys3.style.display="none"
    babys4.style.display="none"

    women1.style.display="block"
    women2.style.display="block"
    women3.style.display="block"
    women4.style.display="block"
}
let babys=document.getElementById("babys")
babys.onclick=function(){
    let men1=document.getElementById("men-1")
    let men2=document.getElementById("men-2")
    let men3=document.getElementById("men-3")
    let men4=document.getElementById("men-4")
    let women1=document.getElementById("women-1")
    let women2=document.getElementById("women-2")
    let women3=document.getElementById("women-3")
    let women4=document.getElementById("women-4")
    let babys1=document.getElementById("babys-1")
    let babys2=document.getElementById("babys-2")
    let babys3=document.getElementById("babys-3")
    let babys4=document.getElementById("babys-4")

    women1.style.display="none"
    women2.style.display="none"
    women3.style.display="none"
    women4.style.display="none"
    men1.style.display="none"
    men2.style.display="none"
    men3.style.display="none"
    men4.style.display="none"

    babys1.style.display="block"
    babys2.style.display="block"
    babys3.style.display="block"
    babys4.style.display="block"
}
let buy1=document.getElementById("buy1")
buy1.onclick=function(){
    let card1=document.getElementById( "card1" )
    let card1_2=document.getElementById( "card1_2" )
    let card1_3=document.getElementById( "card1_3" )
    let card1_4=document.getElementById( "card1_4" )
    let card2=document.getElementById( "card1" )
    let card2_2=document.getElementById( "card1_2" )
    let card2_3=document.getElementById( "card1_3" )
    let card2_4=document.getElementById( "card1_4" )
    card1.style.display="block"
    card1_2.style.display="block"
    card1_3.style.display="block"
    card1_4.style.display="block"
}
let buy2=document.getElementById("buy2")
buy2.onclick=function(){
    let card2=document.getElementById( "card2" )
    let card2_2=document.getElementById( "card2_2" )
    let card2_3=document.getElementById( "card2_3" )
    let card2_4=document.getElementById( "card2_4" )
    card2.style.display="block"
    card2_2.style.display="block"
    card2_3.style.display="block"
    card2_4.style.display="block"
}
let buy3=document.getElementById("buy3")
buy3.onclick=function(){
    let card3=document.getElementById( "card3" )
    let card3_2=document.getElementById( "card3_2" )
    let card3_3=document.getElementById( "card3_3" )
    let card3_4=document.getElementById( "card3_4" )
    card3.style.display="block"
    card3_2.style.display="block"
    card3_3.style.display="block"
    card3_4.style.display="block"
}
let buy4=document.getElementById("buy4")
buy4.onclick=function(){
    let card4=document.getElementById( "card4" )
    let card4_2=document.getElementById( "card4_2" )
    let card4_3=document.getElementById( "card4_3" )
    let card4_4=document.getElementById( "card4_4" )
    card4.style.display="block"
    card4_2.style.display="block"
    card4_3.style.display="block"
    card4_4.style.display="block"
}
let buy5=document.getElementById("buy5")
buy5.onclick=function(){
    let card5=document.getElementById( "card5" )
    let card5_2=document.getElementById( "card5_2" )
    let card5_3=document.getElementById( "card5_3" )
    let card5_4=document.getElementById( "card5_4" )
    card5.style.display="block"
    card5_2.style.display="block"
    card5_3.style.display="block"
    card5_4.style.display="block"
}
let buy6=document.getElementById("buy6")
buy6.onclick=function(){
    let card6=document.getElementById( "card6" )
    let card6_2=document.getElementById( "card6_2" )
    let card6_3=document.getElementById( "card6_3" )
    let card6_4=document.getElementById( "card6_4" )
    card6.style.display="block"
    card6_2.style.display="block"
    card6_3.style.display="block"
    card6_4.style.display="block"
}
let buy7=document.getElementById("buy7")
buy7.onclick=function(){
    let card7=document.getElementById( "card7" )
    let card7_2=document.getElementById( "card7_2" )
    let card7_3=document.getElementById( "card7_3" )
    let card7_4=document.getElementById( "card7_4" )
    card7.style.display="block"
    card7_2.style.display="block"
    card7_3.style.display="block"
    card7_4.style.display="block"
}
let buy8=document.getElementById("buy8")
buy8.onclick=function(){
    let card8=document.getElementById( "card8" )
    let card8_2=document.getElementById( "card8_2" )
    let card8_3=document.getElementById( "card8_3" )
    let card8_4=document.getElementById( "card8_4" )
    card8.style.display="block"
    card8_2.style.display="block"
    card8_3.style.display="block"
    card8_4.style.display="block"
}
let buy9=document.getElementById("buy9")
buy9.onclick=function(){
    let card9=document.getElementById( "card9" )
    let card9_2=document.getElementById( "card9_2" )
    let card9_3=document.getElementById( "card9_3" )
    let card9_4=document.getElementById( "card9_4" )
    card9.style.display="block"
    card9_2.style.display="block"
    card9_3.style.display="block"
    card9_4.style.display="block"
}
let buy10=document.getElementById("buy10")
buy10.onclick=function(){
    let card10=document.getElementById( "card10" )
    let card10_2=document.getElementById( "card10_2" )
    let card10_3=document.getElementById( "card10_3" )
    let card10_4=document.getElementById( "card10_4" )
    card10.style.display="block"
    card10_2.style.display="block"
    card10_3.style.display="block"
    card10_4.style.display="block"
}
let buy11=document.getElementById("buy11")
buy11.onclick=function(){
    let card11=document.getElementById( "card11" )
    let card11_2=document.getElementById( "card11_2" )
    let card11_3=document.getElementById( "card11_3" )
    let card11_4=document.getElementById( "card11_4" )
    card11.style.display="block"
    card11_2.style.display="block"
    card11_3.style.display="block"
    card11_4.style.display="block"
}
let buy12=document.getElementById("buy12")
buy12.onclick=function(){
    let card12=document.getElementById( "card12" )
    let card12_2=document.getElementById( "card12_2" )
    let card12_3=document.getElementById( "card12_3" )
    let card12_4=document.getElementById( "card12_4" )
    card12.style.display="block"
    card12_2.style.display="block"
    card12_3.style.display="block"
    card12_4.style.display="block"
}






