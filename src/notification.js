export default function notify(message, obj) {
  obj.show(message, {
                           theme: "primary",
                           position: "bottom-right",
                           duration : 4000,
                           type: "success"
                        });
}
