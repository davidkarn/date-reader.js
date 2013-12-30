var date_reader = require('./date-reader');

exports.all_matched_slices = function(test) {
    test.deepEqual(date_reader.all_matched_slices("test :[] one two :[three] four", /:\[[a-z]*\]/i),
		[":[] one two :[three] four",":[three] four"]); 
    test.done(); };

exports.match_date_format = function(test) {
    test.deepEqual(date_reader.match_date_format("2011-05-03T14:33", ['iso-8601-year', "-", 'month-leading-zero', "-", 'day-leading-zero', "T", '24-hour-leading-zero', ":", 'minute-leading-zero']),
		{"iso-8601-year":"2011","month-leading-zero":"05","day-leading-zero":"03","24-hour-leading-zero":"14","minute-leading-zero":"33"}); 
    test.done(); };
