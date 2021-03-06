/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

define([ 'jquery',
         'underscore',
         'backbone' ],
function($, _, Backbone) {
  return Backbone.Model.extend({
    idAttribute: 'charId',
    urlRoot: '/api/characters/'
  });
});
