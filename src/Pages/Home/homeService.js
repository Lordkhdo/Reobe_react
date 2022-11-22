export default class HomeService {
  constructor() {
    this.scenarios = [new FirstScenario(), new SecondScenario(), new ThirdScenario()]
    this.currentScenarioIndex = undefined
  }

  getNextScenario = (currentScenarioIndex = undefined) => {
    this.currentScenarioIndex = currentScenarioIndex ?? 0
    if (typeof currentScenarioIndex === 'undefined') {
      return new defaultScenario()
    }

    const scenario = this.scenarios.find(x => x.index === this.currentScenarioIndex + 1)
    console.log('scenario', scenario)
    return !scenario ? new defaultScenario() : scenario
  }

  getPreviousScenario = (currentScenarioIndex = undefined) => {
    this.currentScenarioIndex = currentScenarioIndex
    if (typeof currentScenarioIndex === 'undefined') {
      return new defaultScenario()
    }

    const scenario = this.scenarios.find(x => x.index === this.currentScenarioIndex)
    return !scenario ? new defaultScenario() : new scenario().previousScenario
  }
}

export class Scenario {
  constructor(previousScenario, index, options) {
    this.previousScenario = previousScenario
    this.options = options
    this.index = index
  }
}

class defaultScenario extends Scenario {
  constructor() {
    super(undefined, 0, ['here click', 'nao click aqui', 'nao click aqui também'])
  }
}

class FirstScenario extends Scenario {
  constructor() {
    const previousScenario = new defaultScenario()
    super(previousScenario, previousScenario.index + 1, [
      `${FirstScenario.name} button 1`,
      `${FirstScenario.name} button 2`,
      `${FirstScenario.name} button 3`,
      `${FirstScenario.name} button 4`,
      `${FirstScenario.name} button 5`,
      `${FirstScenario.name} button 6`,
    ])
  }
}

class SecondScenario extends Scenario {
  constructor() {
    const previousScenario = new FirstScenario()
    super(previousScenario, previousScenario.index + 1, [
      `${SecondScenario.name} button 1`,
      `${SecondScenario.name} button 2`,
      `${SecondScenario.name} button 3`,
      `${SecondScenario.name} button 4`,
      `${SecondScenario.name} button 5`,
      `${SecondScenario.name} button 6`,
    ])
  }
}

class ThirdScenario extends Scenario {
  constructor() {
    const previousScenario = new SecondScenario()
    super(previousScenario, previousScenario.index + 1, [
      `${ThirdScenario.name} button 1`,
      `${ThirdScenario.name} button 2`,
      `${ThirdScenario.name} button 3`,
      `${ThirdScenario.name} button 4`,
      `${ThirdScenario.name} button 5`,
      `${ThirdScenario.name} button 6`,
    ])
  }
}