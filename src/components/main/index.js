import React, {Component} from 'react';
import LaobanInfo from '../laoban-info';
import DashenInfo from '../dashen-info';
import {Route, Switch} from 'react-router-dom'
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/laobanInfo" component={LaobanInfo}/>
          <Route path="/dashenInfo" component={DashenInfo}/>
        </Switch>
      </div>
    );
  }
}
;
export default Main;
