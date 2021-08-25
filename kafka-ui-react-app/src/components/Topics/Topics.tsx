import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  clusterTopicNewPath,
  clusterTopicPath,
  clusterTopicsPath,
} from 'lib/paths';

import ListContainer from './List/ListContainer';
import TopicContainer from './Topic/TopicContainer';
import New from './New/New';

const Topics: React.FC = () => (
  <Switch>
    <Route
      exact
      path={clusterTopicsPath(':clusterName')}
      component={ListContainer}
    />
    <Route exact path={clusterTopicNewPath(':clusterName')} component={New} />
    <Route
      path={clusterTopicPath(':clusterName', ':topicName')}
      component={TopicContainer}
    />
  </Switch>
);

export default Topics;
