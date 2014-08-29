Package.describe({
  summary: "Moment Datepicker packaged for Meteor", 
  name: "moment-datepicker"
});

Package.on_use(function(api, where) {
  api.use('jquery', 'client');

  api.add_files('moment-datepicker/moment-datepicker/moment-datepicker.js', 'client');
  api.add_files('moment-datepicker/moment-datepicker/datepicker.css', 'client');
});

Package.on_test(function(api) {
});
