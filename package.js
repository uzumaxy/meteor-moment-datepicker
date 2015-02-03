Package.describe({
  name: "gildaspk:moment-datepicker",
  summary: "Moment Datepicker packaged for Meteor. See https://github.com/MakingSense/moment-datepicker",
  version: "0.0.2",
  git: "https://github.com/djhi/meteor-moment-datepicker.git",
});

Package.on_use(function(api, where) {
  api.use('jquery', 'client');

  api.add_files('moment-datepicker/moment-datepicker/moment-datepicker.js', 'client');
  api.add_files('moment-datepicker/moment-datepicker/datepicker.css', 'client');
});

Package.on_test(function(api) {
});
