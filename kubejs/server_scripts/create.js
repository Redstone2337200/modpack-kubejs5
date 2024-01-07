// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//console.info('Hello, World! (You will see this line every time server resources reload)')
console.info('If this message appears, it means that it has been loaded successfully.')

onEvent('recipes', event => {
    // Change recipes here
    const {
        createFilling,
        createMixing,
        createCrushing,
        createSequencedAssembly,
        createDeploying,
        createMechanicalCrafting,
        createSplashing,
        createPressing,
        createSandpaperPolishing,
        createCompacting,
        createBasin,
        createCutting,
        createMilling
    } = event.recipes;
    //合成表
    createPressing('minecraft:bedrock', '9x minecraft:obsidian').id('dragonsadventure:bedrock')

    createMechanicalCrafting('4x minecraft:command_block', [
        'DDDDD',
        'DdddD',
        'DdadD',
        'DdddD',
        'DDDDD'
    ], {
        D: 'minecraft:diamond_block',
        d: 'minecraft:redstone',
        a: 'create:precision_mechanism'
    }).id('dragonsadventure:command_block')
    createMechanicalCrafting('4x minecraft:chain_command_block', [
        'BBBBB',
        'BNNNB',
        'BNMNB',
        'BNNNB',
        'BBBBB'
    ], {
        B: 'minecraft:iron_bars',
        N: 'minecraft:command_block',
        M: 'create:precision_mechanism'
    }).id('dragonsadventure:chain_command_block')
    createMechanicalCrafting('4x minecraft:repeating_command_block', [
        'AAAAA',
        'AKKKA',
        'AKJKA',
        'AKKKA',
        'AAAAA'
    ], {
        A: 'minecraft:repeater',
        K: 'minecraft:chain_command_block',
        J: 'create:precision_mechanism'
    }).id('dragonsadventure:repeating_command_block')

    createMechanicalCrafting('minecraft:end_portal_frame', [
        'CAAAC',
        'AKKKA',
        'AKJKA',
        'AKKKA',
        'CAAAC'
    ], {
        A: 'minecraft:stone',
        K: 'minecraft:end_stone',
        J: 'minecraft:ender_eye',
        C: 'minecraft:air'
    }).id('dragonsadventure:end_portal_frame')

    //使用动力合成表合成附魔金苹果,你需要做好9×9(81)的动力合成器的布局之后,才能完成合成,不然无法获得附魔金苹果8个
    createMechanicalCrafting('8x minecraft:enchanted_golden_apple', [
        'AAAAAAAAA',//第1行
        'ABBBBBBBA',//第2行
        'ABCCCCCBA',//第3行
        'ABCDDDCBA',//第4行
        'ABCDEDCBA',//第5行
        'ABCDDDCBA',//第6行
        'ABCCCCCBA',//第7行
        'ABBBBBBBA',//第8行
        'AAAAAAAAA',//第9行
    ], {
        A: 'kubejs:ordin_gold_block',
        B: 'kubejs:great_gold_block',
        C: 'kubejs:ultra_gold_block',
        D: 'minecraft:gold_block',
        E: 'minecraft:apple'
    }).id('dragonsadventure:enchanted_golden_apple')
    //动力合成可食用的海洋之心
    createMechanicalCrafting('2x kubejs:eat_heart_of_the_sea', [
        'AAAAAAAAA',//第1行
        'ABBBBBBBA',//第2行
        'ABCCCCCBA',//第3行
        'ABCDDDCBA',//第4行
        'ABCDEDCBA',//第5行
        'ABCDDDCBA',//第6行
        'ABCCCCCBA',//第7行
        'ABBBBBBBA',//第8行
        'AAAAAAAAA',//第9行
    ], {
        A: 'kubejs:eat_snowball',
        B: 'kubejs:eat_slime_ball',
        C: 'kubejs:eat_magma_cream',
        D: 'create:wheat_flour',
        E: 'minecraft:heart_of_the_sea'
    }).id('dragonsadventure:eat_heart_of_the_sea')
    //动力合成可食用的末影珍珠    
    createMechanicalCrafting('8x kubejs:eat_ender_pearl', [
        'AAAAA',
        'ABBBA',
        'ABCBA',
        'ABBBA',
        'AAAAA'
    ], {
        A: 'create:wheat_flour',
        B: 'minecraft:chorus_fruit',
        C: 'minecraft:ender_pearl'
    }).id('dragonsadventure:eat_ender_pearl')

    createCompacting('minecraft:command_block', ['5x minecraft:diamond_block', '3x minecraft:redstone', 'create:precision_mechanism']).superheated().id('dragonsadventure:compacting_command_block')

    createCompacting('minecraft:chain_command_block', ['5x minecraft:iron_bars', '3x minecraft:command_block', 'create:precision_mechanism']).superheated().id('dragonsadventure:compacting_chain_command_block')

    createCompacting('minecraft:repeating_command_block', ['5x minecraft:repeater', '3x minecraft:chain_command_block', 'create:precision_mechanism']).superheated().id('dragonsadventure:compacting_repeating_command_block')

    createCompacting('8x minecraft:end_stone', ['8x minecraft:stone', 'minecraft:ender_pearl']).id('dragonsadventure:end_stone')

    createCompacting('minecraft:enchanted_golden_apple', ['9x kubejs:ultra_gold_block', 'minecraft:apple']).id('dragonsadventure:compacting_enchanted_golden_apple')

    createCompacting('minecraft:command_block_minecart', ['#kubejs:dragonsadventure_cmdb', 'minecraft:minecart']).id('dragonsadventure:command_block_minecart')

    createSplashing(['minecraft:stone', 'minecraft:ender_pearl', Item.of('4x minecraft:stone').withChance(1.0), Item.of('2x minecraft:ender_pearl').withChance(0.4)], 'minecraft:end_stone').id('dragonsadventure:stone')

    createSplashing(['minecraft:sand', Item.of('minecraft:diamond').withChance(0.02), Item.of('create:sturdy_sheet').withChance(0.5), '4x create:ochrum'], 'minecraft:red_sand').id('dragonsadventure:sand')

    createSplashing(['minecraft:sand', 'minecraft:gunpowder', Item.of('4x minecraft:sand').withChance(0.5), Item.of('5x minecraft:gunpowder').withChance(0.5)], 'minecraft:tnt').id('dragonsadventure:gunpowder')

    createSplashing([Item.of('minecraft:diamond').withChance(0.5), Item.of('minecraft:redstone').withChance(0.4), Item.of('create:precision_mechanism').withChance(0.01)], 'minecraft:command_block').id('dragonsadventure:diamond')

    createSplashing([Item.of('minecraft:iron_bars').withChance(0.5), Item.of('minecraft:command_block').withChance(0.4), Item.of('create:precision_mechanism').withChance(0.01)], 'minecraft:chain_command_block').id('dragonsadventure:iron_bars')

    createSplashing([Item.of('minecraft:repeater').withChance(0.5), Item.of('minecraft:chain_command_block').withChance(0.4), Item.of('create:precision_mechanism').withChance(0.01)], 'minecraft:repeating_command_block').id('dragonsadventure:repeater')

    //粉碎轮区域
    //createCrushing(输出[],输入)
    /* event.recipes.create.crushing([
         'minecraft:cobblestone',
         '3x create:experience_nugget',
         Item.of('minecraft:iron_ingot').withChance(0.5),
         Item.of('minecaftt:gold_ingot').withChance(0.5),
         Item.of('minecraft:stone').withChance(5.0),
         Item.of('iceandfire:amythest_ore').withChance(0.2),
         Item.of('dragonsurvival:diamond_chorus').withChance(0.3)
     ],'minecraft:stone')
     createCrushing([],'')*/
     event.recipes.create.crushing([
        'minecraft:obsidian',
        Item.of('8x minecraft:obsidian').withChance(0.4),
        Item.of('10x minecraft:obsidian').withChance(0.2),
        Item.of('2x iceandfire:dragonscale_copper').withChance(0.4),
        '16x create:experience_nugget'
     ],'minecraft:bedrock').processingTime(150).id('dragonsadventure:bedrock')

     createCrushing([
        '16x create:experience_nugget',
        Item.of('4x minecraft:ancient_debris').withChance(0.05),
        Item.of('minecraft:emerald_block').withChance(0.15),
        Item.of('minecraft:iron_block').withChance(0.2),
        Item.of('minecraft:gold_block').withChance(0.2),
        Item.of('minecraft:golden_apple').withChance(0.2),
        Item.of('4x minecraft:lapis_block').withChance(0.2)
     ], 'minecraft:diamond_block').processingTime(100).id('dragonsadventure:golden_apple')

    //切割器区域
    //createCutting(输出[],输入)
    event.recipes.create.cutting([
        '2x kubejs:huohui_food',
        '2x create:experience_nugget',
        Item.of('kubejs:huohui_block').withChance(0.2)
    ], 'kubejs:huohui_block')

    createCutting([
        '2x kubejs:huorong_food',
        '2x create:experience_nugget',
        Item.of('kubejs:huorong_block').withChance(0.2)
    ], 'kubejs:huorong_block')

    //砂纸打磨
    event.recipes.create.sandpaper_polishing([
        'minecraft:diamond',
        '5x create:experience_nugget',
        Item.of('minecraft:diamond_block').withChance(0.2)
    ], 'minecraft:coal')

    createSandpaperPolishing([
        'minecraft:stone',
        Item.of('minecraft:iron_block').withChance(0.2)
    ], 'minecraft:dirt')

    //神秘的配方
    event.recipes.create.item_application([
        'minecraft:diamond_block',
        Item.of('minecraft:emerald_block').withChance(0.5)
    ], [
        'minecraft:diamond',
        'minecraft:emerald'
    ])

    event.recipes.create.haunting([
        'minecraft:lapis_block',
        Item.of('minecraft:emerald_block').withChance(0.5)
    ], 'minecraft:coal')

    //一级致密金块(dragonsadventure:ordin_gold_block)
    createCompacting('kubejs:ordin_gold_block', ['9x minecraft:gold_block', 'minecraft:diamond']).id('dragonsadventure:ordin_gold_block')

    //二级致密金块(dragonsadventure:great_gold_block)
    createCompacting('kubejs:great_gold_block', ['9x kubejs:ordin_gold_block', '2x minecraft:diamond']).id('dragonsadventure:great_gold_block')

    //三级致密金块(dragonsadventure:ultra_gold_block)
    createCompacting('kubejs:ultra_gold_block', ['9x kubejs:great_gold_block', '3x minecraft:diamond']).id('dragonsadventure:ultra_gold_block')

    //四级致密金块(dragonsadventure:kegend_gold_block)
    createCompacting('kubejs:legend_gold_block', ['9x kubejs:ultra_gold_block', '4x minecraft:diamond']).id('dragonsadventure:legend_gold_block')

    //五级致密金块(dragonsadventure:myth_gold_block)
    createCompacting('kubejs:myth_gold_block', ['9x kubejs:legend_gold_block', '5x minecraft:diamond']).id('dragonsadventure:myth_gold_block')

    //组装附魔金苹果
    createSequencedAssembly([
        'minecraft:enchanted_golden_apple',
        Item.of('4x minecraft:enchanted_golden_apple').withChance(0.2),
        Item.of('minecraft:golden_apple').withChance(0.5),
        Item.of('minecraft:gold_block').withChance(0.5),
        Item.of('minecraft:gold_ingot').withChance(0.5),
        '16x create:experience_nugget',
    ], 'minecraft:golden_apple', [
        createDeploying('minecraft:golden_apple', ['minecraft:golden_apple', 'minecraft:gold_ingot']),
        createDeploying('minecraft:golden_apple', ['minecraft:golden_apple', 'minecraft:gold_block']),
        createDeploying('minecraft:golden_apple', ['minecraft:golden_apple', 'kubejs:ordin_gold_block']),
        createDeploying('minecraft:golden_apple', ['minecraft:golden_apple', 'kubejs:great_gold_block']),
        createDeploying('minecraft:golden_apple', ['minecraft:golden_apple', 'kubejs:ultra_gold_block']),
    ]).loops(5).id('dragonsadventure:auto_enchanted_golden_apple')

    //组装可以吃的末影珍珠
    createSequencedAssembly([
        'kubejs:eat_ender_pearl',
        Item.of('iceandfire:spawn_egg_fire_dragon').withChance(2.0),
        Item.of('iceandfire:spawn_egg_ice_dragon').withChance(2.0),
        Item.of('iceandfire:spawn_egg_lightning_dragon').withChance(2.0),
        Item.of('minecraft:ender_pearl').withChance(2.0),
        'create:wheat_flour',
        '16x create:experience_nugget',
    ], 'minecraft:ender_pearl', [
        createDeploying('minecraft:ender_pearl', [
            'minecraft:ender_pearl', 'minecraft:chorus_fruit'
        ]),
        createDeploying('minecraft:ender_pearl', [
            'minecraft:ender_pearl', 'create:wheat_flour'
        ]),
        createPressing('kubejs:eat_ender_pearl', 'minecraft:ender_pearl'),
    ]).loops(3).id('dragonsadventure:auto_eat_ender_pearl')

    //组装可以吃的末影之眼
    createSequencedAssembly([
        'kubejs:eat_ender_eye',
        Item.of('3x minecraft:blaze_powder').withChance(2.0),
        Item.of('3x minecraft:blaze_rod').withChance(2.0),
        Item.of('minecraft:ender_eye').withChance(5.0),
        Item.of('3x minecraft:ender_eye').withChance(1.0),
        '32x create:experience_nugget',
    ], 'minecraft:blaze_powder', [
        createDeploying('minecraft:blaze_powder', ['minecraft:blaze_powder', 'minecraft:ender_pearl']),
        createDeploying('minecraft:blaze_powder', ['minecraft:blaze_powder', 'create:wheat_flour']),
        createPressing('kubejs:eat_ender_eye', 'minecraft:blaze_powder'),
    ]).loops(3).id('dragonsadventure:auto_eat_ender_eye')

    //组装屏障
    createSequencedAssembly([
        'minecraft:barrier',
        Item.of('minecraft:glass').withChance(130.0),
        Item.of('minecraft:bedrock').withChance(5.0),
        Item.of('minecraft:glass').withChance(6.0),
        '4x create:experience_nugget',
    ], 'minecraft:glass', [
        createDeploying('minecraft:glass', ['minecraft:glass', 'minecraft:glass']),
        createDeploying('minecraft:glass', ['minecraft:glass', 'minecraft:obsidian']).processingTime(100),
        createDeploying("minecraft:glass", [
            "minecraft:glass",
            "minecraft:bedrock",
        ]),
    ]).loops(3).id('dragonsadventure:auto_barrier')

    //.357马格南 
    createSequencedAssembly([
        'tac:b_magnum',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('6x tac:b_magnum').withChance(0.1),
        Item.of('3x tac:b_magnum').withChance(0.5),
        'minecraft:iron_nugget',
        '64x create:experience_nugget',
    ], 'create:sturdy_sheet', [
        createPressing('create:precision_mechanism', 'create:sturdy_sheet').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:diamond']),
    ]).loops(4).id('dragonsadventure:auto_b_magnum')

    //.45ACP
    createSequencedAssembly([
        'tac:round45',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('8x tac:round45').withChance(0.1),
        Item.of('4x tac:round45').withChance(0.5),
        'minecraft:iron_nugget',
        '4x create:experience_nugget',
    ], 'create:copper_sheet', [
        createPressing('create:precision_mechanism', 'create:copper_sheet').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_round45')

    //.30-60温彻斯特步枪弹
    createSequencedAssembly([
        'tac:win_30-30',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('8x tac:win_30-30').withChance(0.1),
        Item.of('4x tac:win_30-30').withChance(0.5),
        'create:brass_nugget',
        '8x create:experience_nugget',
    ], 'create:brass_sheet', [
        createPressing('create:precision_mechanism', 'create:brass_sheet').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_win_30-30')

    //.308温彻斯特步枪弹
    createSequencedAssembly([
        'tac:bullet_308',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('12x tac:bullet_308').withChance(0.1),
        Item.of('6x tac:bullet_308').withChance(0.5),
        'minecraft:gold_nugget',
        '8x create:experience_nugget',
    ], 'create:golden_sheet', [
        createPressing('create:precision_mechanism', 'create:golden_sheet').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_bullet_308')

    //5.56x45mm步枪弹
    createSequencedAssembly([
        'tac:nato_556_bullet',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('22x tac:nato_556_bullet').withChance(0.1),
        Item.of('11x tac:nato_556_bullet').withChance(0.5),
        'minecraft:iron_nugget',
        '16x create:experience_nugget',
    ], 'create:iron_sheet', [
        createPressing('create:precision_mechanism', 'create:iron_sheet').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_nato_556_bullet')

    //9x19mm 帕拉贝鲁姆手枪子弹
    createSequencedAssembly([
        'tac:9mm_round',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('12x tac:9mm_round').withChance(0.1),
        Item.of('6x tac:9mm_round').withChance(0.5),
        'create:zinc_nugget',
        '4x create:experience_nugget',
    ], 'create:zinc_ingot', [
        createPressing('create:precision_mechanism', 'create:zinc_ingot').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:9mm_round')

    //12号霰弹
    createSequencedAssembly([
        'tac:10_gauge_round',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('8x tac:10_gauge_round').withChance(0.1),
        Item.of('4x tac:10_gauge_round').withChance(0.5),
        'iceandfire:dragonsteel_fire_ingot',
        '12x create:experience_nugget',
    ], 'iceandfire:dragonsteel_fire_ingot', [
        createPressing('create:precision_mechanism', 'iceandfire:dragonsteel_fire_ingot').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_10_gauge_round')

    //5.8x42mm步枪子弹
    createSequencedAssembly([
        'tac:58x42',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('20x tac:58x42').withChance(0.1),
        Item.of('10x tac:58x42').withChance(0.5),
        'iceandfire:silver_nugget',
        '8x create:experience_nugget',
    ], 'iceandfire:silver_ingot', [
        createPressing('create:precision_mechanism', 'iceandfire:silver_ingot').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_58x42')

    //7.62x25mm托卡列夫手枪弹
    createSequencedAssembly([
        'tac:762x25',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('24x tac:762x25').withChance(0.1),
        Item.of('12x tac:762x25').withChance(0.5),
        'iceandfire:dragonsteel_ice_ingot',
        '8x create:experience_nugget',
    ], 'iceandfire:dragonsteel_ice_ingot', [
        createPressing('create:precision_mechanism', 'iceandfire:dragonsteel_ice_ingot').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_762x25')

    //7.62x54mm步枪子弹
    createSequencedAssembly([
        'tac:762x54',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('10x tac:762x54').withChance(0.1),
        Item.of('5x tac:762x54').withChance(0.5),
        'iceandfire:dragonsteel_lightning_ingot',
        '8x create:experience_nugget',
    ], 'iceandfire:dragonsteel_lightning_ingot', [
        createPressing('create:precision_mechanism', 'iceandfire:dragonsteel_lightning_ingot').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_762x54')

    //7.62x39mm步枪子弹
    createSequencedAssembly([
        'tac:762x39',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('5x tac:762x39').withChance(0.1),
        Item.of('2x tac:762x39').withChance(0.5),
        'iceandfire:dragonscale_amythest',
        '16x create:experience_nugget',
    ], 'iceandfire:dragonscale_amythest', [
        createPressing('create:precision_mechanism', 'iceandfire:dragonscale_amythest').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:diamond']),
    ]).loops(4).id('dragonsadventure:auto_762x39')

    //RPG-7火箭弹
    createSequencedAssembly([
        'tac:rpg7_missile',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('4x tac:rpg7_missile').withChance(0.1),
        Item.of('2x tac:rpg7_missile').withChance(0.5),
        'iceandfire:dragonscale_silver',
        '64x create:experience_nugget',
    ], 'iceandfire:dragonscale_silver', [
        createPressing('create:precision_mechanism', 'iceandfire:dragonscale_silver').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_rpg7_missile')

    //5.7mm穿甲弹
    createSequencedAssembly([
        'tac:57x28',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('4x tac:57x28').withChance(0.1),
        Item.of('2x tac:57x28').withChance(0.5),
        'iceandfire:silver_ore',
        '16x create:experience_nugget',
    ], 'iceandfire:silver_block', [
        createPressing('create:precision_mechanism', 'create:sturdy_sheet').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_57x28')

    //4.6mm穿甲弹
    createSequencedAssembly([
        'tac:46x30',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('4x tac:46x30').withChance(0.1),
        Item.of('2x tac:46x30').withChance(0.5),
        'iceandfire:dragonbone',
        '7x create:experience_nugget',
    ], 'iceandfire:dragon_bone_block', [
        createPressing('create:precision_mechanism', 'create:sturdy_sheet').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_46x30')

    //6.8mm步枪子弹
    createSequencedAssembly([
        'tac:bullet68',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('16x tac:bullet68').withChance(0.1),
        Item.of('8x tac:bullet68').withChance(0.5),
        'iceandfire:dragonscale_copper',
        '8x create:experience_nugget',
    ], 'iceandfire:dragonscale_copper', [
        createPressing('create:precision_mechanism', 'iceandfire:dragonscale_copper').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_bullet68')

    //.50AE手枪子弹
    createSequencedAssembly([
        'tac:ae50',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('20x tac:ae50').withChance(0.1),
        Item.of('10x tac:ae50').withChance(0.5),
        'iceandfire:dragonscales_blue',
        '8x create:experience_nugget',
    ], 'iceandfire:dragonscales_blue', [
        createPressing('create:precision_mechanism', 'iceandfire:dragonscales_blue').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_ae50')

    //.50BMG狙击子弹
    createSequencedAssembly([
        'tac:50bmg',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('10x tac:50bmg').withChance(0.1),
        Item.of('5x tac:50bmg').withChance(0.5),
        'create:rose_quartz',
        '64x create:experience_nugget',
    ], 'create:rose_quartz', [
        createPressing('create:precision_mechanism', 'create:rose_quartz').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_50bmg')

    //.338Lapua狙击子弹
    createSequencedAssembly([
        'tac:lapua338',
        Item.of('create:precision_mechanism').withChance(8.0),
        Item.of('minecraft:gunpowder').withChance(8.0),
        Item.of('#forge:ingots/copper').withChance(5.0),
        Item.of('2x minecraft:iron_nugget').withChance(2.0),
        Item.of('minecraft:iron_ingot').withChance(2.0),
        Item.of('10x tac:lapua338').withChance(0.1),
        Item.of('5x tac:lapua338').withChance(0.5),
        'iceandfire:dragonscales_red',
        '32x create:experience_nugget',
    ], 'iceandfire:dragonscales_red', [
        createPressing('create:precision_mechanism', 'iceandfire:dragonscales_red').processingTime(100),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', '#forge:ingots/copper']),
        createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'minecraft:gunpowder']),
    ]).loops(3).id('dragonsadventure:auto_lapua338')
    //注液器
    //createFilling(输出,输入[])
    createFilling('minecraft:diamond_block', [
        'minecraft:iron_block',
        Fluid.of('kubejs:molten_diamond', 100)
    ]).id('dragonsadventure:diamond_block')
    
    createFilling('minecraft:redstone_block', [
        'minecraft:iron_block',
        Fluid.of('kubejs:molten_redstone', 100)
    ]).id('dragonsadventure:redstone_block')
    
    createFilling('minecraft:gold_block', [
        'minecraft:iron_block',
        Fluid.of('kubejs:molten_golden', 100)
    ]).id('dragonsadventure:gold_block')
    
    createFilling('minecraft:enchanted_golden_apple', [
        'minecraft:golden_apple',
        Fluid.of('kubejs:molten_enchant', 100)
    ]).id('dragonsadventure:enchanted_golden_apple')
    //混合搅拌
    //createMixing(输出,输入[])
    createMixing(Fluid.of('kubejs:molten_diamond',110), [
        '2x minecraft:diamond',
        Fluid.of('minecraft:water', 100)
    ]).superheated().id('dragonsadventure:molten_diamond')
        
    createMixing(Fluid.of('kubejs:molten_redstone',110), [
        '2x minecraft:redstone',
        Fluid.of('minecraft:water', 100)
    ]).superheated().id('dragonsadventure:molten_redstone')    
    
    createMixing(Fluid.of('kubejs:molten_golden',110), [
        '2x minecraft:gold_ingot',
        Fluid.of('minecraft:water', 100)
    ]).superheated().id('dragonsadventure:molten_golden')
    
    createMixing(Fluid.of('kubejs:molten_enchant',120), [
        '2x minecraft:enchanted_book',
        Fluid.of('minecraft:water', 150)
    ]).superheated().id('dragonsadventure:molten_enchant')
    event.recipes.create.mixing('minecraft:dragon_breath', [
        'minecraft:glass_bottle',
        '#kubejs:dragon_scale'
    ]).heated().id('dragonsadventure:dragon_breath')
})