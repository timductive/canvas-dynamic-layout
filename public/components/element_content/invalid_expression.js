/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




/* Disabling eslint because of this jsx-a11y error(https://www.npmjs.com/package/eslint-plugin-jsx-a11y):
 11:3  error  Non-interactive elements should not be assigned mouse or keyboard event listeners  jsx-a11y/no-noninteractive-element-interactions
 */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';

export const InvalidExpression = ({ selectElement }) => (
  <h3 onClick={selectElement}>Invalid expression</h3>
);

InvalidExpression.propTypes = {
  selectElement: PropTypes.func,
};
