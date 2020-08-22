var label

function circulin(key, color, x, y) {
  if (x < canvas.height && y < canvas.width) {
    stroke(0)
    fill(color)
    ellipse(x, y, 20)
    textAlign(CENTER, CENTER)
    fill('black')
    text(key.toUpperCase(), x, y)

  }
}

function buttons() {
  b1 = createButton("Load Data")
  b1.mousePressed(lData)

  b2 = createButton("Save Data")
  b2.mousePressed(sData)

  b3 = createButton("Train")
  b3.mousePressed(sTrain)

  b4 = createButton("Change Status")
  b4.mousePressed(chstatus)

  b5 = createButton("BG Zones")
  b5.mousePressed(bgzones)

  b5 = createButton("Save Model")
  b5.mousePressed(sModel)

  b6 = createButton("Load Model")
  b6.mousePressed(lModel)
}

function chstatus() {
  if (status == 'point') {
    status = 'predict'
  } else {
    status = 'point'
  }
  print("The new status is: " + status)
}

// BACKGROUND ZONES
function bgzones() {
  let array = []
  for (i = 0; i < 20; i++) {
    for (j = 0; j < 20; j++) {
      model.classify({
        'x': i,
        'y': j
      }).then(results => array.push({
        'x': i,
        'y': j,
        'label': results[0].label,
        'confidence': results[0].confidence
      }))
    }
  }
  print("finish")


  // let array = []
  // for (i = 0; i < 2; i++) {
  //   for (j = 0; j < 2; j++) {
  //   array.push({'x':i,"y":j})
  //
  //   }}
  //   model.classify(array).then(results => print(results))
  //   print (array)


}


// for (var i = 0; i < 10; i++) {
//      for (var j = 0; j < 10; j++) {
//        model.predict({x:i,y:j}, letter(i,j))
//        var c = 100
//        set(i, j, c);
//      }
//  }
//  updatePixels();


function letter(i, j, error, results) {
  print(i)
  print(j)
  print(error)
  print(results)
  // label = results[0]['label']
}
