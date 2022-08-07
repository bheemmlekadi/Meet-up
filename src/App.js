import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
const App = () => <h1>Hello World</h1>

export default App
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import HistoryContext from './Context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    isRegister: false,
    name: '',
    topic: 'Arts and Culture',
    registerErr: false,
  }

  changeRegistrationStatus = () => {
    this.setState({isRegister: true})
  }

  updateName = updateName => {
    this.setState({name: updateName})
  }

  updateTopic = updateTopic => {
    this.setState({topic: updateTopic})
  }

  updateErr = response => {
    this.setState({registerErr: response})
  }

  render() {
    const {isRegister, name, topic, registerErr} = this.state
    return (
      <Switch>
        <HistoryContext.Provider
          value={{
            isRegister,
            changeRegistrationStatus: this.changeRegistrationStatus,
            name,
            topic,
            updateName: this.updateName,
            updateTopic: this.updateTopic,
            registerErr,
            updateErr: this.updateErr,
          }}
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </HistoryContext.Provider>
      </Switch>
    )
  }
}

export default App
