import { Component } from 'react';
import TagManager from 'react-gtm-module';

class GATrackedComponent extends Component {
  componentDidMount() {
    const dntEnabled = navigator.doNotTrack === '1';
    console.log('DNT', dntEnabled);

    if (dntEnabled) {
      return;
    }

    const tagManagerArgs = {
      gtmId: 'GTM-WHL2PP8',
    };

    TagManager.initialize(tagManagerArgs);
  }
}

export default GATrackedComponent;