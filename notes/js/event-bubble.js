// Event bubble

/* by default it is enabled, clicking on a div>ul>li.item-2 will cause item 2 clicked, and then all other in backwards as follows
  item -2 -> event
  ul -> event
  div -> event
*/

/* How to stop ?
    use event.stopPropagation() to stop all backwards level events
    use event.stopImmediatePropagation() to stop all backwards level and same level events to stop
*/


const reference = '/practice/milestone-5/dom-events/event-bubble.html';