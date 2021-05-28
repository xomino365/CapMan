import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { extend } from '@syncfusion/ej2-base';
import {
  Schedule,
  TimelineViews,
  TimelineMonth,
  Resize,
  DragAndDrop
} from '@syncfusion/ej2-schedule';
import * as dataSource from './datasource.json';

Schedule.Inject(TimelineViews, TimelineMonth, Resize, DragAndDrop);

/**
 * Schedule inline editing sample
 */

let data: Object[] = <Object[]>(
  extend([], (dataSource as any).zooEventsData, null, true)
);
  let template: string = '<div class="tooltip-wrap">' +
        '<div class="image ${EventType}"></div>' +
        '<div class="content-area"><div class="name">${Subject}</></div>' +
        '${if(City !== null && City !== undefined)}<div class="city">${City}</div>${/if}' +
        '<div class="time">From&nbsp;:&nbsp;${StartTime.toLocaleString()} </div>' +
        '<div class="time">To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${EndTime.toLocaleString()} </div></div></div>';
let scheduleObj: Schedule = new Schedule({
  width: '100%',
  height: '650px',
  selectedDate: new Date(2018, 3, 4),
  views: ['TimelineDay', 'TimelineWeek', 'TimelineMonth'],
  currentView: 'TimelineWeek',
  rowAutoHeight: true,
  startHour: '01:00',
  endHour: '10:00',
  showWeekend: false,
  timeScale: {
    enable: true,
    interval: 30,
    slotCount: 1
  },
  workHours: {
    highlight: true,
    start: '11:00',
    end: '20:00'
  },
  allowInline: true,
  eventSettings: {
    dataSource: <Object[]>(
      extend(
        [],
        (dataSource as any).resourceData.concat(
          (dataSource as any).timelineResourceData
        ),
        null,
        true
      )
    ),
            enableTooltip: true,
            tooltipTemplate: template
  },
  group: { resources: ['Categories'] },
  resources: [
    {
      field: 'TaskId',
      title: 'Category',
      name: 'Categories',
      allowMultiple: true,
      dataSource: [
        { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
        { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
        { text: 'Micheal', id: 5, groupId: 3, color: '#df5286' },
        { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
        { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
        { text: 'Mark', id: 6, groupId: 2, color: '#5978ee' },
        { text: 'Sarah', id: 7, groupId: 2, color: '#5978ee' },
        { text: 'Fred', id: 8, groupId: 2, color: '#5978ee' },
        { text: 'Jenny', id: 9, groupId: 2, color: '#5978ee' },
        { text: 'Susan', id: 10, groupId: 2, color: '#5978ee' },
        { text: 'Peter', id: 11, groupId: 2, color: '#5978ee' }
      ],
      textField: 'text',
      idField: 'id',
      groupIDField: 'groupId',
      colorField: 'color'
    }
  ]
});
scheduleObj.appendTo('#Schedule');
