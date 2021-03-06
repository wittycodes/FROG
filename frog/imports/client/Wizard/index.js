// @flow

import * as _ from 'lodash';
import * as React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Clear } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

import { Logo } from '/imports/ui/Logo';
import { Button } from '/imports/ui/Button';

import { goToHomepage } from './store/navigation';
import { getTemplates } from './store/templates';

import { BaseLayout } from './components/ui/BaseLayout';

import { SelectTemplateContainer } from './containers/SelectTemplateContainer';
import { ConfigureTemplateContainer } from './containers/ConfigureTemplateContainer';

// Patch for propTypes issue with react-router
Route.propTypes = {
  ...Route.propTypes,
  path: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

const SingleActivity = _.flow(withRouter)(({ history }) => {
  const availableTemplates = React.useMemo(getTemplates, [getTemplates]);

  return (
    <BaseLayout
      left={<Logo />}
      right={
        <div style={{ marginTop: '16px' }}>
          <Button
            variant="minimal"
            icon={<Clear />}
            onClick={() => goToHomepage(history)}
          />
        </div>
      }
    >
      <>
        <Typography
          variant="h6"
          align="center"
          style={{
            paddingBottom: '32px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}
        >
          Create with Wizard
        </Typography>
        <Switch>
          <Route
            path={[
              ...availableTemplates[0].map(listing => `/wizard/${listing.id}`),
              ...availableTemplates[1].map(listing => `/wizard/${listing.id}`)
            ]}
            component={ConfigureTemplateContainer}
          />
          <Route component={SelectTemplateContainer} />
        </Switch>
      </>
    </BaseLayout>
  );
});

export default SingleActivity;
