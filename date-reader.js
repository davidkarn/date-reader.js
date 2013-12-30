var date_regexp_table = {
    'day-leading-zero': /([0-2][0-9]|3[0-1])/,
    'day-three-letters': /\b(Sun|Mon|Tue|Wed|Thu|Fri|Sat)\b/i,
    'day': /([1-9]|[1-2][0-9]|3[0-1])/,
    'day-full': /\b(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\b/i,
    'iso-8601-day-of-week': /([1-7])/,
    'day-suffix': /(st|nd|rd|th)\b/i,
    'day-of-week': /([0-6])/,
    'day-of-year': /([0-9]|[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|36[0-5])/,
    'month-full': /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/i,
    'month-leading-zero': /(0[1-9]|1[0-2])/,
    'month-three-letters': /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/i,
    'month': /([1-9]|1[0-2])/,
    'days-in-month': /(28|29|30|31)/,
    'leap-year?': /(1|0)/,
    'iso-8601-year': /([0-9][0-9][0-9][0-9])/,
    'year': /([0-9][0-9][0-9][0-9])/,
    'year-two-digit': /([0-9][0-9])/,
    'am-pm': /(am|pm)\b/i,
    'swatch-internet-time': /([0-9][0-9][0-9])/,
    'hour': /([1-9]|1[0-2])/,
    '24-hour': /([0-9]|1[0-9]|2[0-3])/,
    'hour-leading-zero': /(0[1-9]|1[0-1])/,
    '24-hour-leading-zero': /([0-1][0-9]|2[0-3])/,
    'minute-leading-zero': /([0-5][0-9])/,
    'second-leading-zero': /([0-5][0-9])/,
    'tenth-second': /([0-9])/,
    'timezone-abr': /\b(UTC|GMT|WET|CET|EET|MSK|IRT|SAMT|YEKT|TMT|TJT|OMST|NOVT|LKT|MMT|KRAT|ICT|WIT|WAST|IRKT|ULAT|CST|CIT|BNT|YAKT|JST|KST|EIT|ACST|VLAT|SAKT|GST|MAGT|IDLE|PETT|NZST|WAT|AT|EBT|NT|WBT|AST|EST|CST|MST|PST|YST|AHST|CAT|HST|NT|IDLW)\b/i,
    'daylight-savings?': /(1|0)/,
    'gmt-difference': /(Z|[-+](?:[0-1][0-9]|2[0-3])[0-5][0-9])i/,
    'gmt-difference-colon': /(Z|[-+](?:[0-1][0-9]|2[0-3]):[0-5][0-9])/,
    'timezone-offset-seconds': /(-4[0-2][0-9][0-9][0-9]|-43[0-2][0-9][0-9]|-[0-3][0-9][0-9][0-9][0-9]|50[0-3][0-9][0-9]|50400|[0-4][0-9][0-9][0-9][0-9])/,
    'unix-time': /\b([0-9]{10,10})\b/,
    'unix-time-full': /^([0-9]{10,10})$/};

var date_format_table = [
    {label: 'iso-8601-date-time-seconds-tenth-second-timezone', format: ['iso-8601-year', "-", 'month-leading-zero', "-", 'day-leading-zero', "T", '24-hour-leading-zero', ":", 'minute-leading-zero', ":", 'second-leading-zero', ".", 'tenth-second', 'gmt-difference-colon']},
    {label: 'iso-8601-date-time-seconds-timezone', format: ['iso-8601-year', "-", 'month-leading-zero', "-", 'day-leading-zero', "T", '24-hour-leading-zero', ":", 'minute-leading-zero', ":", 'second-leading-zero', 'gmt-difference-colon']},
    {label: 'iso-8601-date-time-timezone', format: ['iso-8601-year', "-", 'month-leading-zero', "-", 'day-leading-zero', "T", '24-hour-leading-zero', ":", 'minute-leading-zero', 'gmt-difference-colon']},
    {label: 'iso-8601-date-time', format: ['iso-8601-year', "-", 'month-leading-zero', "-", 'day-leading-zero', "T", '24-hour-leading-zero', ":", 'minute-leading-zero']},
    {label: 'iso-8601-date', format: ['iso-8601-year', "-", 'month-leading-zero', "-", 'day-leading-zero']},
    {label: 'gmt-difference', format: ['gmt-difference']},
    {label: 'gmt-difference-colon', format: ['gmt-difference-colon']},
    {label: '12-hour-minute-time', format: ['hour', ":", 'minute-leading-zero', 'am-pm']},
    {label: '12-hour-minute-time-leading-zero', format: ['hour-leading-zero', ":", 'minute-leading-zero', 'am-pm']},
    {label: '12-hour-time', format: ['hour', 'am-pm']},
    {label: '12-hour-time-leading-zero', format: ['hour-leading-zero', 'am-pm']},
    {label: 'iso-8601-time-seconds-tenth-second', format: ['24-hour-leading-zero', ":", 'minute-leading-zero', ":", 'second-leading-zero', ".", 'tenth-second']},
    {label: 'iso-8601-time-seconds', format: ['24-hour-leading-zero', ":", 'minute-leading-zero', ":", 'second-leading-zero']},
    {label: 'iso-8601-time', format: ['24-hour-leading-zero', ":", 'minute-leading-zero']},
    {label: 'day', format: ['day-three-letters', ", ", 'day-leading-zero']},
    {label: 'day2', format: ['day-three-letters', ", ", 'day']},
    {label: 'month-year', format: ['month-three-letters', " ", 'year']},
    {label: 'month-year', format: ['month-full', " ", 'year']},
    {label: 'timezone-abr', format: ['timezone-abr']},
    {label: 'unix-time', format: ['unix-time-full']}];

// given a string and a regexp, return all slices of string beginning with a match of regexp

function all_matched_slices(string, regexp) {
    var slices = [];
    var pos;
    while ((pos = string.search(regexp)) >= 0) {
	slices.push(string.slice(pos)); 
	string = string.slice(pos+1); }
    return slices; }

function match_date_format(string, format) {
    var matched_slots = {};
    for (var i in format) {
	var chunk = format[i];
	if (date_regexp_table[chunk]) {
	    var regexp = new RegExp("^"+date_regexp_table[chunk].source, 'im');
	    var match = string.match(regexp);
	    if (!match) {
		return false; }
	    match = match[0];
	    matched_slots[chunk] = match;
	    string = string.slice(match.length); }
	else {
	    if (string.search(chunk) !== 0) {
		return false; }
	    string = string.slice(chunk.length); }}
    return matched_slots; }

function parse_date_format(string, format) {    
    var first_regexp = date_regexp_table[format[0]];
    var matches = all_matched_slices(string, first_regexp);
    if (matches.length == 0) {
	return false; }
    for (var i in matches) {
	var full_match = match_date_format(matches[i], format);
	if (full_match) {
	    return full_match; }}
    return false; }

function slots_to_date(parsed_slots) {
    var translated_slots = {};
    for (var key in parsed_slots) {
	var trans = date_translation_table[key];
	if (trans) {
	    translated_slots[trans.slot] = trans.parser(parsed_slots[key]); } }
    var seconds = 0;
    for (var key in translated_slots) {
	fn = seconds_translation_table[key];
	if (fn) {
	    seconds += fn(translated_slots[key], translated_slots); }}
    return new Date(seconds * 1000); }
    

function read_date(string, formats) {
    var parsed_slots = {};
    var parsed = [];
    formats = formats || date_format_table;
    if (formats.length == 0) {
	return false; }
    for (var i in formats) {
	var format = formats[i].format;
	parsed.push(parse_date_format(string, format)); }
    parsed = parsed.filter(function(x) { return x; });
    parsed.reverse().each(function(slots) {
	for (var i in slots) {
	    parsed_slots[i] = slots[i]; }});
    return slots_to_date(parsed_slots); }


function return_false() {
    return false; }

function returner(x) { return x; }

function parse_month(string) {
    var month_table = {jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9,
		       oct: 10, nov: 11, dec: 12};
    return month_table[string.slice(0, 3).toLowerCase()]; }

function parse_year(string) {
    var year = parseInt(string);
    if (year > 100) { return year; }
    if (year < 20) {
	return 2000 + year; }
    return 1900 + year; }

function parse_timezone(string) {
    var tz_table = {ACDT: '+10:30', ACST: '+09:30', ACT: '+08', ADT: '-03', AEDT: '+11', AEST: '+10', AFT: '+04:30', AKDT: '-08', AKST: '-09', AMST: '-03', AMST: '+05', AMT: '-04', AMT: '+04', ART: '-03', AST: '+03', AST: '-04', AWDT: '+09', AWST: '+08', AZOST: '-01', AZT: '+04', BDT: '+08', BIOT: '+06', BIT: '-12', BOT: '-04', BRT: '-03', BST: '+06', BST: '+01', BTT: '+06', CAT: '+02', CCT: '+06:30', CDT: '-05', CDT: '-04', CEDT: '+02', CEST: '+02', CET: '+01', CHADT: '+13:45', CHAST: '+12:45', CHOT: '+08', ChST: '+10', CHUT: '+10', CIST: '-08', CIT: '+08', CKT: '-10', CLST: '-03', CLT: '-04', COST: '-04', COT: '-05', CST: '-06', CST: '+08', CST: '+09:30', CST: '+10:30', CST: '-05', CT: '+08', CVT: '-01', CWST: '+08:45', CXT: '+07', DAVT: '+07', DDUT: '+10', DFT: '+01', EASST: '-05', EAST: '-06', EAT: '+03', ECT: '-04', ECT: '-05', EDT: '-04', EEDT: '+03', EEST: '+03', EET: '+02', EGST: '+00', EGT: '-01', EIT: '+09', EST: '-05', EST: '+10', FET: '+03', FJT: '+12', FKST: '-03', FKST: '-03', FKT: '-04', FNT: '-02', GALT: '-06', GAMT: '-09', GET: '+04', GFT: '-03', GILT: '+12', GIT: '-09', GMT: '', GST: '-02', GST: '+04', GYT: '-04', HADT: '-09', HAEC: '+02', HAST: '-10', HKT: '+08', HMT: '+05', HOVT: '+07', HST: '-10', ICT: '+07', IDT: '+03', IOT: '+03', IRDT: '+08', IRKT: '+09', IRST: '+03:30', IST: '+05:30', IST: '+01', IST: '+02', JST: '+09', KGT: '+06', KOST: '+11', KRAT: '+07', KST: '+09', LHST: '+10:30', LHST: '+11', LINT: '+14', MAGT: '+12', MART: '-09:30', MAWT: '+05', MDT: '-06', MET: '+01', MEST: '+02', MHT: '+12', MIST: '+11', MIT: '-09:30', MMT: '+06:30', MSK: '+04', MST: '+08', MST: '-07', MST: '+06:30', MUT: '+04', MVT: '+05', MYT: '+08', NCT: '+11', NDT: '-02:30', NFT: '+11:30', NPT: '+05:45', NST: '-03:30', NT: '-03:30', NUT: '-11', NZDT: '+13', NZST: '+12', OMST: '+07', ORAT: '+05', PDT: '-07', PET: '-05', PETT: '+12', PGT: '+10', PHOT: '+13', PHT: '+08', PKT: '+05', PMDT: '-02', PMST: '-03', PONT: '+11', PST: '-08', PYST: '-03', PYT: '-04', RET: '+04', ROTT: '-03', SAKT: '+11', SAMT: '+04', SAST: '+02', SBT: '+11', SCT: '+04', SGT: '+08', SLST: '+05:30', SRT: '-03', SST: '-11', SST: '+08', SYOT: '+03', TAHT: '-10', THA: '+07', TFT: '+05', TJT: '+05', TKT: '+14', TLT: '+09', TMT: '+05', TOT: '+13', TVT: '+12', UCT: '', ULAT: '+08', UTC: '', UYST: '-02', UYT: '-03', UZT: '+05', VET: '-04:30', VLAT: '+10', VOLT: '+04', VOST: '+06', VUT: '+11', WAKT: '+12', WAST: '+02', WAT: '+01', WEDT: '+01', WEST: '+01', WET: '', WST: '+08', YAKT: '+10', YEKT: '+06', Z: ''};
    return parse_gmt(tz_table[string.toUpperCase()]); }

function parse_gmt(string) {
    var matches = string.match(/[a-zA-Z]*([-+])?([0-9]{2,2})?(:([0-9]{2,2}))?/);
    var minutes = matches[4] || 0;
    var hours = matches[2] || 0;
    var sign = matches[1] || '+';
    var seconds =  (minutes * 60) + (hours * 60 * 60);
    if (sign === '+') { return seconds; }
    return 0 - seconds; }

var date_translation_table = {
    'day-leading-zero': {slot: 'day', parser: parseInt},
    'day': {slot: 'day', parser: parseInt},
    'day-of-year': {slot: 'day_of_year', parser: parseInt},
    'month-full': {slot: 'month', parser: parse_month},
    'month-leading-zero': {slot: 'month', parser: parseInt},
    'month-three-letters': {slot: 'month', parser: parse_month},
    'month': {slot: 'month', parser: parseInt},
    'iso-8601-year': {slot: 'year', parser: parseInt},
    'year': {slot: 'year', parser: parseInt},
    'year-two-digit': {slot: 'year', parser: parse_year},
    'am-pm': {slot: 'am_pm', parser: returner},
    'hour': {slot: 'hour', parser: parseInt},
    '24-hour': {slot: 'hour', parser: parseInt},
    'hour-leading-zero': {slot: 'hour', parser: parseInt},
    '24-hour-leading-zero': {slot: 'hour', parser: parseInt},
    'minute-leading-zero': {slot: 'minute', parser: parseInt},
    'second-leading-zero': {slot: 'second', parser: parseInt},
    'tenth-second': {slot: 'tenth_second', parser: parseInt},
    'timezone-abr': {slot: 'timezone', parser: parse_timezone},
    'gmt-difference': {slot: 'timezone', parser: parse_gmt},
    'gmt-difference-colon': {slot: 'timezone', parser: parse_gmt},
    'timezone-offset-seconds': {slot: 'timezone', parser: parseInt},
    'leap-year?': {slot: 'leap-year', parser: parseInt},
    'unix-time': {slot: 'unix', parser: parseInt},
    'unix-time-full': {slot: 'unix', parser: parseInt}};

var seconds_translation_table = {
    day: function(x) { return x * 60 * 60 * 24; },
    day_of_year: function (x) { return x * 60 * 60 * 24; },
    month: function(month, slots) {
	var months = [31, ((slots.year % 4) == 0 ? 29 : 28), 31, 30, 30, 31, 31, 30, 30, 31];
	var days = 0;
	for (var i = 1; i < month; i++) {
	    days += months[i - 1]; }
	return days * 60 * 60 * 24; },
    year: function(x) { 
	var leapdays = Math.floor(Math.abs(x - 1970) / 4) * 60 * 60 * 24;
	if (x - 1970 < 0) {
	    leapdays = 0 - leapdays; }
	return (((x - 1970) * 60 * 60 * 24 * 365)
		+ leapdays); },
    am_pm: function(x) { return (x.toLowerCase() == 'pm' ? (12 * 60 * 60) : 0); },
    hour: function(x) { return x * 60; },
    minute: function(x) { return x * 60; },
    second: returner,
    tenth_second: function(x) { return x * 0.1; },
    timezone: returner,
    unix: returner}

exports.all_matched_slices = all_matched_slices;
exports.match_date_format = match_date_format;
exports.parse_date_format = parse_date_format;
exports.parse_month = parse_month;
exports.parse_year = parse_year;
exports.parse_gmt = parse_gmt;
exports.parse_timezone = parse_timezone;
