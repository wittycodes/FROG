// @flow
import * as React from 'react';
import { observer } from 'mobx-react';

import { connect, type StoreProp } from '../store';
import Connection from '../store/connection';

export const Line = observer(
  ({ connection, scaled }: { connection: Connection, scaled: boolean }) => (
    <g>
      <path
        d={scaled ? connection.pathScaled : connection.path}
        fill="transparent"
        stroke={connection.selected ? '#CDDEEF' : '#31BFAE'}
        strokeWidth="2"
      />
      <path
        d={scaled ? connection.pathScaled : connection.path}
        onClick={connection.select}
        fill="transparent"
        stroke="transparent"
        strokeWidth="12"
      />
    </g>
  )
);

export const DragLine = connect(
  ({
    store: {
      connectionStore: { dragPath },
      state
    }
  }: StoreProp) => {
    if (state.mode !== 'dragging') {
      return null;
    }
    return (
      <path d={dragPath} fill="transparent" stroke="#CDDEEF" strokeWidth="2" />
    );
  }
);

export default connect(
  ({
    store: {
      connectionStore: { all: connections }
    },
    scaled
  }: StoreProp & { scaled: boolean }) => (
    <g>
      {connections.map(connection => (
        <Line scaled={scaled} key={connection.id} connection={connection} />
      ))}
    </g>
  )
);
