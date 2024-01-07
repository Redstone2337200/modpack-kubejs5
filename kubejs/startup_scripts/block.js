onEvent('block.registry', event => {
  // Register new blocks here
  // event.create('example_block').material('iron').hardness(1.0).displayName('Example Block')
  event.create('ordin_gold_block').material('metal').hardness(9.0).fullBlock(true).displayName('')
})

onEvent('block.registry', event => {
  event.create('great_gold_block').material('metal').hardness(17.0).fullBlock(true).displayName('')
})

onEvent('block.registry', event => {
  event.create('ultra_gold_block').material('metal').hardness(25.0).fullBlock(true).displayName('')
})

onEvent('block.registry', event => {
  event.create('legend_gold_block').material('metal').hardness(38.0).fullBlock(true).displayName('')
})

onEvent('block.registry', event => {
  event.create('myth_gold_block').material('metal').hardness(50.0).fullBlock(true).displayName('')
})

onEvent('block.registry', event => {
  event.create('huohui_block').material('metal').hardness(50.0).fullBlock(true).displayName('')
})

onEvent('block.registry', event => {
  event.create('huorong_block').material('metal').hardness(100.0).fullBlock(true).displayName('')
})

onEvent('block.modification', event => {
  event.modify('kubejs:ordin_gold_block', block => {
    block.destroySpeed = 6.0
    block.explosionResistance = 60.0
    block.lightEmission = 1
    //block.material = 'stone'
    block.requiresTool = true
  })
  event.modify('kubejs:great_gold_block', block => {
    block.destroySpeed = 9.0
    block.explosionResistance = 108.0
    block.lightEmission = 1
    //block.material = 'stone'
    block.requiresTool = true
  })
  event.modify('kubejs:ultra_gold_block', block => {
    block.destroySpeed = 12.0
    block.explosionResistance = 162.0
    block.lightEmission = 1
    //block.material = 'stone'
    block.requiresTool = true
  })
  event.modify('kubejs:legend_gold_block', block => {
    block.destroySpeed = 15.0
    block.explosionResistance = 208.0
    block.lightEmission = 1
    //block.material = 'stone'
    block.requiresTool = true
  })
  event.modify('kubejs:myth_gold_block', block => {
    block.destroySpeed = 18.0
    block.explosionResistance = 262.0
    block.lightEmission = 1
    //block.material = 'stone'
    block.requiresTool = true
  })
  event.modify('kubejs:huohui_block', block => {
    block.destroySpeed = 15.0
    block.explosionResistance = 180.0
    block.lightEmission = 1
    //block.material = 'stone'
    block.requiresTool = true
  })
  event.modify('kubejs:huorong_block', block => {
    block.destroySpeed = 20.0
    block.explosionResistance = 280.0
    block.lightEmission = 1
    //block.material = 'stone'
    block.requiresTool = true
  })
})