onEvent('ponder.registry', event => {
    event
        .create('iceandfire:dragonforge_ice_core_disabled')
        .scene(
            'dragonforge_ice',
            '制作一个龙霜锻炉',
            (scene, util) => {
                scene.showStructure()
                scene.idle(20)
                //辅助类:设置龙骨块
                const setDragonBoneBlocks = (positions) => {
                    positions.forEach(pos => scene.world.setBlocks(pos, 'iceandfire:dragon_bone_block'));
                }
                //辅助类：设置龙霜锻炉砖块
                const setForgelceBricks = (positions) => {
                    positions.forEach(pos => scene.world.setBlocks(pos, 'iceandfire:dragonforge_ice_brick'));
                }


                //第1层
                scene.addKeyframe()
                setDragonBoneBlocks([
                    [3, 1, 3], [1, 1, 3], 
                    [3, 1, 1], [1, 1, 1]
                ])
                scene.text(20, "首先在4个角分别放上龙骨块")
                scene.idle(40)
                setForgelceBricks([
                    [2, 1, 3], [3, 1, 2], [2, 1, 2], 
                    [1, 1, 2], [2, 1, 1]
                ])
                    scene.overlay.showOutline('green', {}, [3, 1, 3, 1, 1, 1], 20)
                scene.text(20, "然后其他地方分别填上龙霜锻炉砖块")
                scene.idle(40)
                //第2层
                scene.addKeyframe()
                scene.text(40, "然后这里用龙霜锻炉砖块围起来")
                    .attachKeyFrame()
                //显示每一块
                let bricks = [
                    [3, 2, 3], [2, 2, 3], [1, 2, 3],
                    [3, 2, 2], [1, 2, 2], [3, 2, 1],
                    [1, 2, 1]
                ]
                setForgelceBricks([
                    [3, 2, 3], [2, 2, 3], [1, 2, 3], 
                    [3, 2, 2], [1, 2, 2], [3, 2, 1], 
                    [1, 2, 1]
                ])
                for (let brick of bricks) {
                    scene.world.showSection(brick, Direction.DOWN)
                    scene.idle(5)
                }
                //最后一块
                let final = scene.world.showIndependentSection([3, 2, 2], Direction.DOWN)
                scene.world.moveSection(final, [0, -1, 0], 0)
                scene.idle(10)
                var table5 = util.select.fromTo(2, 2, 2, 2, 2, 2)
                var table6 = util.select.fromTo(2, 2, 1, 2, 2, 1)
                scene.world.setBlocks([2, 2, 2], 'iceandfire:dragonforge_ice_core_disabled')
                scene.text(30, "龙霜锻炉核心", [2.5, 3.0, 2.0])
                    .colored(PonderPalette.GREEN);
                scene.overlay.showOutline(PonderPalette.GREEN, new Object(), table5, 20);
                scene.idle(30)
                scene.world.setBlocks([2, 2, 1], 'iceandfire:dragonforge_ice_input')
                scene.text(30, "龙霜锻炉焰口", [2.5, 3.0, 1.0])
                    .colored(PonderPalette.GREEN);
                scene.overlay.showOutline(PonderPalette.GREEN, new Object(), table6, 20);
                scene.idle(30)
                scene.text(40, "然后在中间放龙霜锻炉核心，外边放龙霜锻炉焰孔")
                scene.idle(40)
                //第3层
                scene.addKeyframe()
                setDragonBoneBlocks([
                    [3, 3, 3], [1, 3, 3], 
                    [3, 3, 1], [1, 3, 1]
                ])
                scene.text(20, "和第1层一样，先在4个角分别放上龙骨块")
                scene.idle(40)
                setForgelceBricks([
                    [2, 3, 3], [3, 3, 2], [2, 3, 2], 
                    [1, 3, 2], [2, 3, 1]
                ])
                scene.text(20, "然后其他地方分别填上龙霜锻炉砖块")
                scene.idle(40)
                //替换
                scene.world.modifyBlock([2, 2, 2], () => Block.id('iceandfire:dragonforge_ice_core'), true)
                scene.world.setBlocks([1, 2, 2], Block.id('iceandfire:dragonforge_ice_brick')
                    .with('grill', 'true'), true)
                scene.world.setBlocks([2, 2, 3], Block.id('iceandfire:dragonforge_ice_brick')
                    .with('grill', 'true'), true)
                scene.world.setBlocks([3, 2, 2], Block.id('iceandfire:dragonforge_ice_brick')
                    .with('grill', 'true'), true)
            })
    event
        .create('iceandfire:dragonforge_lightning_core_disabled')
        .scene(
            'dragonforge_lightning',
            '制作一个龙霆锻炉',
            (scene, util) => {
                scene.showStructure()
                scene.idle(20)
                //辅助类:设置龙骨块
                const setDragonBoneBlocks = (positions) => {
                    positions.forEach(pos => scene.world.setBlocks(pos, 'iceandfire:dragon_bone_block'));
                }
                //辅助类：设置龙霆锻炉砖块
                const setForgelightningBricks = (positions) => {
                    positions.forEach(pos => scene.world.setBlocks(pos, 'iceandfire:dragonforge_lightning_brick'));
                }


                //第1层
                scene.addKeyframe()
                setDragonBoneBlocks([
                    [3, 1, 3], [1, 1, 3], 
                    [3, 1, 1], [1, 1, 1]
                ])
                scene.text(20, "首先在4个角分别放上龙骨块")
                scene.idle(40)
                setForgelightningBricks([
                    [2, 1, 3], [3, 1, 2], [2, 1, 2], 
                    [1, 1, 2], [2, 1, 1]
                ])
                 scene.overlay.showOutline('green', {}, [3, 1, 3, 1, 1, 1], 20)
                scene.text(20, "然后其他地方分别填上龙霆锻炉砖块")
                scene.idle(40)
                //第2层
                scene.addKeyframe()
                scene.text(40, "然后这里用龙霆锻炉砖块围起来")
                .attachKeyFrame()
                //显示每一块
                let bricks = [
                    [3, 2, 3], [2, 2, 3], [1, 2, 3], 
                    [3, 2, 2], [1, 2, 2], [3, 2, 1], 
                    [1, 2, 1]
                ]
                setForgelightningBricks([
                    [3, 2, 3], [2, 2, 3], [1, 2, 3], 
                    [3, 2, 2], [1, 2, 2], [3, 2, 1], 
                    [1, 2, 1]
                ])
                for (let brick of bricks) {
                    scene.world.showSection(brick, Direction.DOWN)
                    scene.idle(5)
                }
                //最后一块
                let final = scene.world.showIndependentSection([3, 2, 2], Direction.DOWN)
                scene.world.moveSection(final, [0, -1, 0], 0)
                scene.idle(10)
                var table5 = util.select.fromTo(2, 2, 2, 2, 2, 2)
                var table6 = util.select.fromTo(2, 2, 1, 2, 2, 1)
                scene.world.setBlocks([2, 2, 2], 'iceandfire:dragonforge_lightning_core_disabled')
                scene.text(30, "龙霆锻炉核心", [2.5, 3.0, 2.0])
                    .colored(PonderPalette.GREEN);
                scene.overlay.showOutline(PonderPalette.GREEN, new Object(), table5, 20);
                scene.idle(30)
                scene.world.setBlocks([2, 2, 1], 'iceandfire:dragonforge_lightning_input')
                scene.text(30, "龙霆锻炉焰口", [2.5, 3.0, 1.0])
                    .colored(PonderPalette.GREEN);
                scene.overlay.showOutline(PonderPalette.GREEN, new Object(), table6, 20);
                scene.idle(30)
                scene.text(40, "然后在中间放龙霆锻炉核心，外边放龙霆锻炉焰孔")
                scene.idle(40)
                //第3层
                scene.addKeyframe()
                setDragonBoneBlocks([
                    [3, 3, 3], [1, 3, 3], 
                    [3, 3, 1], [1, 3, 1]
                ])
                scene.text(20, "和第1层一样，先在4个角分别放上龙骨块")
                scene.idle(40)
                setForgelightningBricks([
                    [2, 3, 3], [3, 3, 2], [2, 3, 2], 
                    [1, 3, 2], [2, 3, 1]
                ])
                scene.text(20, "然后其他地方分别填上龙霆锻炉砖块")
                scene.idle(40)
                //替换
                scene.world.modifyBlock([2, 2, 2], () => Block.id('iceandfire:dragonforge_lightning_core'), true)
                scene.world.setBlocks([1, 2, 2], Block.id('iceandfire:dragonforge_lightning_brick')
                    .with('grill', 'true'), true)
                scene.world.setBlocks([2, 2, 3], Block.id('iceandfire:dragonforge_lightning_brick')
                    .with('grill', 'true'), true)
                scene.world.setBlocks([3, 2, 2], Block.id('iceandfire:dragonforge_lightning_brick')
                    .with('grill', 'true'), true)
            })
})