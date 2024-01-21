ServerEvents.commandRegistry((event) => {
    const { commands: Commands, arguments: Arguments } = event;
    let type1 = ["default", "triangle"]
    let name1 = ["abs", "sqrt", "ceil", "floor"]
    let name2 = ["sin", "cos", "tan", "atan"]
    event.register(
        Commands.literal('math')
            .requires(src => src.hasPermission(1))
            .then(Commands.argument('default|triangle', Arguments.STRING.create(event))
                .then(Commands.argument('abs|sqrt|ceil|floor', Arguments.STRING.create(event))
                    .then(Commands.argument('value', Arguments.INTEGER.create(event))
                        .executes(run => {
                            const type = Arguments.STRING.getResult(run, "default|triangle")
                            const name = Arguments.STRING.getResult(run, "abs|sqrt|ceil|floor")
                            const value = Arguments.INTEGER.getResult(run, "value")
                            let value1 = 0
                            if (type == undefined && name == undefined && value <= 0 && isRealNumber(value) == false) {
                                server.tell(Text.red('运行失败！数值不是实数。').bold())
                            } else if (type == type1[0]) {
                                value1 = value
                                if (name == name1[0] && value >= 0 && isRealNumber(value) == true) {
                                    //let abs = Math.abs(value)
                                    server.tell(Text.green(`执行成功！${value}的绝对值为：${Math.abs(value1)}`).bold())
                                } else if (name == name1[1] && value >= 0 && isRealNumber(value) == true) {
                                    //let sqrt = Math.sqrt(value)
                                    server.tell(Text.green(`执行成功！${value}的平方根为：${Math.sqrt(value1)}`).bold())
                                } else if (name == name1[2] && value >= 0 && isRealNumber(value) == true) {
                                    //let ceil = Math.ceil(value)
                                    server.tell(Text.green(`执行成功！大于等于${value}的最小值为：${Math.ceil(value1)}`).bold())
                                } else if (name == name1[0] && value >= 0 && isRealNumber(value) == true) {
                                    //let floor = Math.floor(value)
                                    server.tell(Text.green(`执行成功！小于等于${value}的最大值为：${Math.floor(value1)}`).bold())
                                }
                            }
                        }
                        )
                    )
                )
            )
    )
    event.register(
        Commands.literal('math')
            .requires(src => src.hasPermission(1))
            .then(Commands.argument('triangle|default', Arguments.STRING.create(event))
                .then(Commands.argument('sin|cos|tan|atan', Arguments.STRING.create(event))
                    .then(Commands.argument('value', Arguments.INTEGER.create(event))
                        .executes(run => {
                            const type = Arguments.STRING.getResult(run, "triangle|default")
                            const name = Arguments.STRING.getResult(run, "sin|cos|tan|atan")
                            const value = Arguments.INTEGER.getResult(run, "value")
                            let server = run.source.getServer()
                            let value2 = 0
                            if (type == undefined && name == undefined && value <= 0 && isRealNumber(value) == false) {
                                server.tell(Text.red('运行失败！数值不是实数。').bold())
                            } else if (type == type1[1]) {
                                value2 = value
                                if (name == name2[0] && value >= 0 && isRealNumber(value) == true) {
                                    //let sin = Math.sin(value)
                                    server.tell(Text.green(`执行成功！${value}的正弦函数为：${Math.sin(value2)}`).bold())
                                } else if (name == name2[1] && value >= 0 && isRealNumber(value) == true) {
                                    //let cos = Math.cos(value)
                                    server.tell(Text.green(`执行成功！${value}的余弦函数为：${Math.cos(value2)}`).bold())
                                } else if (name == name2[2] && value >= 0 && isRealNumber(value) == true) {
                                    //let tan = Math.tan(value)
                                    server.tell(Text.green(`执行成功！${value}的正切函数为：${Math.tan(value2)}`).bold())
                                } else if (name == name1[3] && value >= 0 && isRealNumber(value) == true) {
                                    //let atan = Math.atan(value)
                                    server.tell(Text.green(`执行成功！${value}的反正切值为：${Math.atan(value2)}`).bold())
                                }

                            }
                        })
                    )
                )
            )
    )
})

function isRealNumber(value) {
    return !isNaN(value) && isFinite(value);
}

function isImaginaryNumber(value) {
  return !isNaN(value) && isFinite(value) && value !== 0;
}

//console.log(isImaginaryNumber(3i)); // true
//console.log(isImaginaryNumber(4)); // false

//console.log(isRealNumber(5)); // true
//console.log(isRealNumber(Infinity)); // false
//console.log(isRealNumber(NaN)); // false
