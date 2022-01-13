module.exports = {
    NO_SPACE_PATTERN: /^\S*$/,
    TEXT_ONLY_WITHOUT_SPECIALS_PATTERN: /^[^`~!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿0-9]*$/,
    NUMBER_AFTER_TEXT_PATTERN: /^[a-zA-Z ]/,
    TEXT_ONLY_WITH_SPECIALS_PATTERN: /^[a-zA-Z -/]*$/,
    FMP_URL: 'https://financialmodelingprep.com/',
    FMP_API_V3_URL: 'https://financialmodelingprep.com/api/v3/',
    MAX_STOCKS_COUNT_FOR_BATCH: 14,
    USER_CONNECTION_NOTIFICATION_TYPES : [
        'accept_connection_request', 'decline_connection_request','break_connection'
    ]
};

