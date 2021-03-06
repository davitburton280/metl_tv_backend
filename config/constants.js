module.exports = {
    NO_SPACE_PATTERN: /^\S*$/,
    TEXT_ONLY_WITHOUT_SPECIALS_PATTERN: /^[^`~!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿0-9]*$/,
    NUMBER_AFTER_TEXT_PATTERN: /^[a-zA-Z ]/,
    TEXT_ONLY_WITH_SPECIALS_PATTERN: /^[a-zA-Z -/]*$/,
    FMP_URL: 'https://financialmodelingprep.com/',
    FMP_API_V3_URL: 'https://financialmodelingprep.com/api/v3/',
    MAX_STOCKS_COUNT_FOR_BATCH: 14,
    USER_CONNECTION_NOTIFICATION_TYPES: [
        'accept_connection_request', 'decline_connection_request', 'break_connection', 'block_connection'
    ],
    GROUP_CHAT_NOTIFICATION_TYPES: [
        'chat_group_join_invitation', 'accept_chat_group_invitation', 'decline_chat_group_invitation',
        'remove_from_chat_group', 'left_chat_group'
    ],
    GROUP_NOTIFICATION_TYPES: [
        'page_group_join_invitation', 'accept_page_group_invitation', 'decline_page_group_invitation',
        'join_page_group_invitation',
        'confirm_group_invitation', 'ignore_group_invitation',
        'left_page_group',
        'remove_from_page_group',
        'page_group_admin_request',
        'page_group_moderator_request',
        'decline_page_group_admin_request',
        'accept_page_group_admin_request',
        'accept_page_group_moderator_request',
    ],

    POST_NOTIFICATION_TYPES: [
        'post_added',
        'group_post_added'
    ],


};

