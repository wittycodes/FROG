// @flow

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import { type LogT } from '/imports/frog-utils';
import { LocalSettings } from './settings';

export const Logs = new Mongo.Collection('logs');

export const logLogin = (sessionId: string) => {
  Meteor.call('merge.log', {
    userId: Meteor.userId(),
    sessionId,
    type: 'Logged in'
  });
};

export const engineLogger = (
  sessionId: string,
  type: string,
  value?: number | string
) =>
  Meteor.call(
    'merge.log',
    ({
      userId: Meteor.userId(),
      sessionId,
      type,
      value
    }: Object)
  );

export const teacherLogger = (
  sessionId: string,
  type: string,
  value?: number | string
) => {
  if (!LocalSettings.researchLogin) {
    engineLogger(sessionId, type, value);
  }
};

export const createLogger = (
  sessionId: string,
  instanceId: string,
  activity: Object,
  userId?: string
) => {
  const logger = (logItem: LogT | LogT[]) => {
    const user = Meteor.users.findOne(userId || Meteor.userId());
    const logExtra = ({
      userId: userId || user._id,
      sessionId,
      instanceId,
      activityType: activity.activityType,
      activityPlane: activity.plane,
      activityId: activity._id
    }: Object);

    Meteor.call('merge.log', logItem, logExtra);
  };
  return logger;
};

export const dashDocId = (aId: string, name: string) =>
  aId + '/dashboard/' + name;
