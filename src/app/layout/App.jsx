import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventForm from '../../features/events/EventForm/EventForm';
import SettingsDashboard from '../../features/User/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/User/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/User/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import HomePage from '../../features/Home/HomePage';
import ModalManager from '../../features/modals/modalManager';

class App extends Component {
  render() {
    return (
      <div>
         <ModalManager />
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>

          <Route path='/(.+)'
          render={() => (
      <div>
           <NavBar/>
        <Container className="main">
        <Switch>
          
            <Route path='/events'  component={EventDashboard} />
            <Route path='/event/:id' component={EventDetailedPage} />
            <Route path='/manage/:id' component={EventForm} />
            <Route path='/people' component={PeopleDashboard} />
            <Route path='/profile/:id' component={UserDetailedPage} />
            <Route path='/settings' component={SettingsDashboard} />
            <Route path='/createEvent' component={EventForm} />
        </Switch>
        </Container>
      </div>
          )}
          />
      </div>

    );
  }
}

export default App;

