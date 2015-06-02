'use strict';

import all from './all.js';


let development = {
  port   : all.port,
  baseURL: 'http://localhost:' + all.port,
  title  : all.title + '- Development Environment',
  db     : all.db,
  session: all.session
};


export default development;