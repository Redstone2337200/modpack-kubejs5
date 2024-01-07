onEvent('fluid.registry', event => {
//钻石
    event.create('molten_diamond')
     .thinTexture(0xFF0000)
     .bucketColor(0X87CEFA)
     .thickTexture(0X87CEFA)
     .translationKey('fluid.kubejs.molten_diamond.name')
//红石     
    event.create('molten_redstone')
     .thinTexture(0xFF0000)
     .bucketColor(0XFF0000)
     .thickTexture(0XFF0000)
     .translationKey('fluid.kubejs.molten_redstone.name')
//黄金     
    event.create('molten_golden')
     .thinTexture(0xFF0000)
     .bucketColor(0XFFD700)
     .thickTexture(0XFFD700)
     .translationKey('fluid.kubejs.molten_golden.name')
//附魔
    event.create('molten_enchant')
     .thinTexture(0xFF0000)
     .bucketColor(0X9B30FF)
     .thickTexture(0X9B30FF)
     .translationKey('fluid.kubejs.molten_enchant.name')
})


/*
// Startup scrionEvent('fluid.registry', event => {
// These first examples are 1.16.5 and 1.18.2 syntax

// Basic "thick" (looks like lava) fluid with red tint
event.create('thick_fluid')
    .thickTexture(0xFF0000)
    .bucketColor(0xFF0000)
    .displayName('Thick Fluid')

// Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
event.create('thick_fluid')
    .thinTexture(0xFF0000)
    .bucketColor(0x00FFFF)
    .displayName('Thin Fluid')
    .noBucket() // both these methods are 1.18.2+ only
    .noBlock()

// Fluid with custom textures
event.create('strawberry_cream')
    .displayName('Strawberry Cream')
    .stillTexture('kubejs:block/strawberry_still')
    .flowingTexture('kubejs:block/strawberry_flow')
    .bucketColor(0xFF33FF)

// For 1.18.1 the syntax is slightly different
event.create('thick_fluid', fluid => {
    fluid.textureThick(0xFF0000) // the texture method names are different in 1.18.1 and below, textureXyz instead of xyzTexture
    fluid.bucketColor(0xFF0000)
    fluid.displayName('Thick Fluid')
})
*/                                                 