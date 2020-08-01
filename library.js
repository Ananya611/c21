function hasCollided(obj1,obj2){
    obj1RightEdge = obj1.x+ obj1.width
    obj2LeftEdge =  obj2.x
    if(obj1RightEdge>=obj2LeftEdge){
      return true
    }
    else{
    return false
    }
    }

    function isTouching(object1,object2){
        if(object1.x-object2.x<object1.width/2+object2.width/2
          && object2.x-object1.x<object1.width/2+object2.width/2
          &&object1.y-object2.y<object1.height/2+object2.height/2
          &&object2.y-object1.y<object1.height/2+object2.height/2){
          return true
      
        }
        else{
         return false
        }
      
      
      }