const EVENT_NAMES = {
  WAITLIST_BUTTON_CLICK: "Waitlist_button_click",
  OTHER_ORG_CLICK: "Other_org_click",
  YOUTUBE_PLAY: "Youtube_video_played",
  YOUTUBE_PAUSE: "Youtube_video_paused",
  POPUP_APPEARS: "Popup_appears",
  OUTSIDE_POPUP_CLICK: "Outside_popup_click",
  POPUP_CLOSE: "Popup_close",
  HOME_PAGE_ENTER: "Home_page_enter",
  ABOUT_PAGE_ENTER: "About_page_enter",
};

const EVENT_DESCRIPTIONS = {
  WAITLIST_BUTTON_CLICK:
    "Clicked the button on the front of the home page which is meant for joining a waitlist. Ideally this is clicked only once",
  OTHER_ORG_CLICK:
    "Clicking on the form field to manually type in the organisation name, because it was not present in the dropdown list. Ideally it should be present in the dropdown",
  YOUTUBE_PLAY:
    "Played the youtube video on the homescreen. Ideally the users should watch it to the end and not pause it",
  YOUTUBE_PAUSE:
    "Paused the youtube video on the homescreen. Ideally the users should have watched it to the end without pausing. Watching to the end is a sign of good engagement and video content.",
  POPUP_APPEARS: "A popup appears in the About page.",
  OUTSIDE_POPUP_CLICK:
    "User clicks outside the popup in an attempt to close the popup. These clicks may indicate that the user is annoyed by the popup",
  POPUP_CLOSE: "User closes the popup",
  HOME_PAGE_ENTER: "User enters the home page, possible leaving the about page",
  ABOUT_PAGE_ENTER: "User enters the about page.",
};

export { EVENT_NAMES, EVENT_DESCRIPTIONS };

// 1, 2, 3, 4, 5, 6, 7m