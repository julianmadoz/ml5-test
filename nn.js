// TRAINING

function sTrain(){
  print('Starting Training')
  model.normalizeData()
  let options = {
    epochs: 100,
    batchsize: 400,
    learningRate: 5}
  model.train(options, finishedTrainig)

}

function finishedTrainig(){
  print("Training done")
  status = 'predict'
  print('Now: ' + status)
}

// PREDICT
function gotResults(error, results){
  if(mouseX<canvas.width && mouseY<canvas.height){
    print(results[0].label + ' @ ' + results[0].confidence)
    circulin(results[0]['label'], 'red', mouseX, mouseY)}

}
// DATA MANAGMENT
function sData(){
  model.saveData()

}

function lData(){
  model.loadData('Data.json', dataLoaded)

}
function dataLoaded(){
  print('Loading data')
  var data = model.data.data.raw
  var length = data.length
  for(i=0; i<length; i++){
    circulin(data[i].ys.label , 'green',data[i].xs.x, data[i].xs.y )}
  print('Data loaded')
}

function sModel(){
  model.save()
}

function lModel(){
  const modelInfo = {
  model: 'Model/model.json',
  metadata: 'Model/model_meta.json',
  weights: 'Model/model.weights.bin',
  };
  model.load(modelInfo)
  print('Model loaded')
  chstatus()
}
