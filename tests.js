var date_reader = require('./date-reader');

exports.all_matched_slices = function(test) {
    test.deepEqual(date_reader.all_matched_slices("test :[] one two :[three] four", /:\[[a-z]*\]/i),
		[":[] one two :[three] four",":[three] four"]); 
    test.done(); };

exports.match_date_format = function(test) {
    test.deepEqual(date_reader.match_date_format("2011-05-03T14:33", ['iso-8601-year', "-", 'month-leading-zero', "-", 'day-leading-zero', "T", '24-hour-leading-zero', ":", 'minute-leading-zero']),
		{"iso-8601-year":"2011","month-leading-zero":"05","day-leading-zero":"03","24-hour-leading-zero":"14","minute-leading-zero":"33"}); 
    test.done(); };

exports.parse_date_format = function(test) {
    test.deepEqual(date_reader.parse_date_format("2011-05-03T14:33", ['iso-8601-year', "-", 'month-leading-zero', "-", 'day-leading-zero', "T", '24-hour-leading-zero', ":", 'minute-leading-zero']),
		{"iso-8601-year":"2011","month-leading-zero":"05","day-leading-zero":"03","24-hour-leading-zero":"14","minute-leading-zero":"33"}); 
    test.done(); };

exports.parse_month = function(test) {
    test.equal(date_reader.parse_month("January"), 1);
    test.equal(date_reader.parse_month("JANUARY"), 1);
    test.equal(date_reader.parse_month("feb"), 2);
    test.equal(date_reader.parse_month("DEC"), 12);
    test.equal(date_reader.parse_month("july"), 7);
    test.equal(date_reader.parse_month("apr"), 4);
    test.equal(date_reader.parse_month("Nov"), 11);
    test.equal(date_reader.parse_month("oct"), 10);
    test.done(); }

exports.parse_year = function(test) {
    test.equal(date_reader.parse_year("99"), 1999);
    test.equal(date_reader.parse_year("12"), 2012);
    test.equal(date_reader.parse_year("2012"), 2012);
    test.done(); }

exports.parse_gmt = function(test) {
    test.equal(date_reader.parse_gmt("Z+03"), (3 * 60 * 60));
    test.equal(date_reader.parse_gmt("Z-03"), (0 - (3 * 60 * 60)));
    test.equal(date_reader.parse_gmt("Z-08:15"), (0 - (8 * 60 * 60)
						  - (15 * 60)));
    test.equal(date_reader.parse_gmt("Z+:15"), (15 * 60));
    test.done(); }

exports.parse_timezone = function(test) {
    test.equal(date_reader.parse_timezone("pst"), 0 - (8 * 60 * 60));
    test.equal(date_reader.parse_timezone("UTC"), 0);
    test.done(); }


