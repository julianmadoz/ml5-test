function mousePressed(){
  if(status == 'point'){
  circulin(targetLabel, [225,204,0], mouseX, mouseY)
  let inputs  = { x: mouseX ,  y: mouseY  }
  let target  = {   label: targetLabel    }
  model.addData(inputs, target)
  }
  if(status == 'predict'){
    model.classify({x:mouseX,y:mouseY}, gotResults)
  }
}

function keyPressed(){
  targetLabel = key.toUpperCase()
  if(key == 't'){ sTrain()}
  if(key == 'l'){ lData()}
  if(key == 'q'){ sData()}
}
