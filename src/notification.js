import noty from 'noty'
import '../node_modules/noty/lib/noty.css';


noty.overrideDefaults({
    layout   : 'bottomRight',
    type: 'success',
    theme: 'metroui',
    timeout: 1000
});

export default function notify(message) {
  new noty({
    text: message
  }).show();
}
