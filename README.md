# UI Engineer Coding Exercise

## Description

Create the responsive page layout using css grid where we have used header, footer, cards and sidebar
Cards consists of 9 numbered cards which can be manipulated by using the shuffle and short buttons
Used JavaScript to shuffle and sort the cards. And for page layout used css grid. 

## Visuals
File path: index.html


Desktop – 960px

 ![image](https://user-images.githubusercontent.com/41114953/128845164-ff378b88-ecde-4384-a0fa-e25347d80536.png)

Mobile

![image](https://user-images.githubusercontent.com/41114953/128845245-2c33fedc-b6d5-48af-8e10-e0469babec0f.png)

 
## Page layout
![image](https://user-images.githubusercontent.com/41114953/128845753-34ecd715-d92b-4718-98e7-7e4a6ed3c8f2.png)

 
## Css

**File path: css\styles.css

For page layout and cards grids  used the css grid.  
For sidemenu button alignment used css flex.
Used media query to make page responsive. 

Important class – if we have to change the color or style of card. 
 
/* classes for card styleing */
.cardType-1 {
    background-color: #2B8EAD;
}

.cardType-2 {
    background-color: #6F98A8;
}

.cardType-3 {
    background-color: #BFBFBF;
}

.cardType-4 {
    background-color: #2F454E;
}



## JavaScript function  

**File Path: js\scripts.js

-	cardArray is Array of card with text(text to display) and class (for styling) 

![image](https://user-images.githubusercontent.com/41114953/128845820-c6053175-4d49-4b40-8eb8-60680222d2a6.png)

  
-	Used  loadCards function to loop the cardArray and appended the card to cards-holder

![image](https://user-images.githubusercontent.com/41114953/128845856-d9bec3b1-1243-4746-8a2d-f9bb3d741120.png)

 
-	To shuffle cards on click of button we are calling handleShuffle function and after shuffling array we are rendering cards again using loadCards function. 

![image](https://user-images.githubusercontent.com/41114953/128845932-8b3298f5-7209-434b-968f-f0bdd0553c88.png)

 
-	To sort cards on click of button we are calling handleSort function and after sorting array we are rendering cards again using loadCards function.

![image](https://user-images.githubusercontent.com/41114953/128845946-6919d9d0-6068-4976-a4be-9c3054f32f0f.png)
