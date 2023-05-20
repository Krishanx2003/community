import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './sponser.css';

const Sponser = () => (
  <div className="sponser section__padding">
  
    <div>
      <img src={google}  alt="hwll"/>
    </div>
    <div>
      <img src={slack} alt="hwll" />
    </div>
    <div>
      <img src={atlassian} alt="hwll" />
    </div>
    <div>
      <img src={dropbox} alt="hwll" />
    </div>
    <div>
      <img src={shopify}  alt="hwll" />
    </div>
  </div>
);

export default Sponser;
