let model
let targetLabel = 'A'
let status = 'point'
let trainingData = []
let canvas
function setup() {
  canvas  = createCanvas(400, 400)
  background(200)

  //eme ele faib
  model = ml5.neuralNetwork(
    {
    inputs: ['x','y'],
    outputs: ['labels'],
    task: 'classification',
    debug: 'true'
    })
    buttons()

}
