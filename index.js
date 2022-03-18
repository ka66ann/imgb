
const { k } = require('./%')
const AUTH_TOKEN = '4ada74e3b527de8d-e3695a52a9a8b46b-cd6f1e1296677bb5';
 var answ = [["type","question","extras"],["url","send URL",""],["range","1-->10","0;1;2;3;4;5;6;7;8;9;10"],["keyboard","KYIV?","Y;N"],["text","...COMMENT",""]] // Skip header row; Read all rows, first column


var PARAMETERS_SHEET_NAME = 'parameters';
var QUESTIONS_SHEET_NAME = 'questions';
var ANSWERS_SHEET_NAME = 'answers';
var SURVEY_STARTED_STATE_TYPE = 'started';
var SURVEY_ENDED_STATE_TYPE = 'ended';
var IN_SURVEY_STATE_TYPE = 'survey';

// Global parameters (Values will be read from the parameters sheet)
var gDidFillParameters = false;
var gAccessToken = 'Your access token value from the parameters sheet';
var gBotName = 'Your bot name from the parameters sheet';
var gBotAvatar = 'Your bot avatar url from the parameters sheet';
var gWelcomeMessage = 'Your welcome message from the parameters sheet';
var gWelcomeStartButton = 'Your welcome start button from the parameters sheet';
var gEndMessage = 'Your end message from the parameters sheet';
var gDoNotUnderstandMessage = 'Your do not understand input message from the parameters sheet';
var gShouldUseRandomColors = false;
var gDefaultKeyboardColor = 'Your default keyboard option color from the parameters sheet';

// ---- Input validation methods ----

function isEvent(postData, event) {
  return (postData.event == event);
}

function isMessageEvent(postData) {
  return isEvent(postData, 'message');
}

function isMessageType(postData, type) {
  if (!isMessageEvent(postData)) return false;
  if (!postData.message ||  postData.message.type !== type) return false;

  return true;
}

function isConversationStartEvent(postData) {
  return isEvent(postData, 'conversation_started');
}

function isTextMessage(postData) {
  return isMessageType(postData, 'text');
}

function extractTextFromMessage(postData) {
  if (!postData || !postData.message) return undefined;

  return postData.message.text;
}

// ---- Tracking data state methods ----

function isEmptyState(postData) {
  if (!postData.message || !postData.message.tracking_data) return true;
  return (JSON.stringify(postData.message.tracking_data) === JSON.stringify({}));
}

function stateSurveyStarted() {
  var state = {
    type: SURVEY_STARTED_STATE_TYPE
  }
  return (state);
}

function isStateStartedSurvey(trackingData) {
    return (trackingData.type === SURVEY_STARTED_STATE_TYPE);
}

function stateSurveyEnded() {
  var state = {
    type: SURVEY_ENDED_STATE_TYPE
  }
  return (state);
}

function isStateEndedSurvey(trackingData) {
    return (trackingData.type === SURVEY_ENDED_STATE_TYPE);
}

function stateInSurvey(questionIndex, row) {
  var state = {
    type: IN_SURVEY_STATE_TYPE,
    index:questionIndex,
    row: row
  }
  return (state);
}

function isStateInSurvey(trackingData) {
    return (trackingData.type === IN_SURVEY_STATE_TYPE);
}

function getQuestionIndexFromState(trackingData) {
  return trackingData.index;
}

function getUserAnswerRowFromState(trackingData) {
  if (!trackingData) return undefined;
  return trackingData.row;
}

// ---- Spreadsheet access methods ----

function getQuestionByIndex(questionIndex) {
 


  return console.warn(questionIndex)
}

function getAnswerIndexForUser(userId) {

  

return console.warn(userId)
}

function writeAnswer(userAnswerRow, questionIndex, answerString) {
  
return console.warn(text, userId, authToken, senderName, senderAvatar, trackingData, keyboard)

}

// ---- Send messages methods ----
async function sayText(text, userId, authToken, senderName, senderAvatar, trackingData, keyboard) {


  var data = {
    'type' : 'text',
    'text' : text,
    'receiver': userId,
    'sender': {
      'name': senderName,
      'avatar': senderAvatar
    },
    'tracking_data': JSON.stringify(trackingData || {})
  };

  if (keyboard) {
    data.keyboard = keyboard;
  }

 

  //console.log(options);
  return await fetch('https://chatapi.viber.com/pa/send_message', {
    'async': true,
    'crossDomain': true,
    'method': 'POST',
    'headers': {
      'X-Viber-Auth-Token': authToken,
      'content-type': 'application/json',
      'cache-control': 'no-cache'
    },
   'body' : JSON.stringify(data)
  }).then( r => r.json() )

}

function sendWelcomeMessage(postData) {
  var keyboardObject = createKeyboard([gWelcomeStartButton]);
  console.warn(keyboardObject)
  return sayText(gWelcomeMessage, getSenderId(postData), gAccessToken, gBotName, gBotAvatar, stateSurveyStarted(), keyboardObject);
}

function sendDoNotUnderstandInputMessage(postData) {
  return sayText(gDoNotUnderstandMessage, getSenderId(postData), gAccessToken, gBotName, gBotAvatar);
}

function sendEndMessage(postData) {
  return sayText(gEndMessage, getSenderId(postData), "4b0434cadd67ddc3-9e6d7bdd1b9fabe8-5adc74bad53c1f66", gBotName, gBotAvatar, stateSurveyEnded())
}

// ---- State handling methdos ----

function getSenderId(postData) {
  if (!postData) return undefined;

  if (postData.sender) { // Might be a message event
      return postData.sender.id;
  }
  else if (postData.user) { // Might be a conversation_started event
    return postData.user.id;
  }

  return undefined;
}

function createKeyboard(values) {


var KEYBOARD_DEFAULT_FONT_COLOR = "#80ffa2"

var KeyboardGenerator = function() {
  this.elements = [];

  this.elementToKeyboard = function(text, backgroundColor, fontColor) {
  return [{
                'Columns': '6',
                'Rows': '1',
                'BgColor': backgroundColor,
                'ActionType': 'reply',
                'ActionBody': text,
                'Text': `<font color=\"#80ffa2\"><b>${text}</b></font>`,
                'TextVAlign': 'middle',
                'TextHAlign': 'center',
                'TextSize': 'large'
            }];
  }

  this.addElement = function(text, backgroundColor, fontColor) {
    var addedElements = this.elementToKeyboard(text, backgroundColor,
        fontColor || KEYBOARD_DEFAULT_FONT_COLOR);

    this.elements = this.elements.concat(addedElements);
  }

  this.build = function() {
    return {
    'Type': 'keyboard',
    'DefaultHeight': false,
        'Buttons': this.elements
    };
  }
}




  var keyboardGenerator = new KeyboardGenerator();
  for(var i = 0; i < values.length; i++) {
    var keyboardValue = values[i];
    keyboardGenerator.addElement(keyboardValue, (gShouldUseRandomColors ? undefined : gDefaultKeyboardColor));
  }

  return keyboardGenerator.build();
}

function tryToSendQuestion(postData, questionRow, questionIndex, userAnswerRow) {
  if (!questionRow || !postData || questionIndex == undefined || userAnswerRow == undefined) return false;

  var didHandle = false;

  var questionType = questionRow[0];
  var questionMessage = questionRow[1];

  if (questionType === 'keyboard') {
    var questionExtras = questionRow[2];
    var keyboardFields = questionExtras.split(';');
    var keyboardObject = createKeyboard(keyboardFields);
    
    didHandle = true;

    console.warn(questionIndex, userAnswerRow)
    return sayText(questionMessage, getSenderId(postData), gAccessToken, gBotName, gBotAvatar, stateInSurvey(questionIndex, userAnswerRow), keyboardObject);
    
  }
  else if (questionType === 'text' || questionType === 'range') {
    didHandle = true;
    return sayText(questionMessage, getSenderId(postData), gAccessToken, gBotName, gBotAvatar, stateInSurvey(questionIndex, userAnswerRow));
    
  }

  return didHandle;
}

function isValidAnswer(postData, questionRow) {
  if (!questionRow || !postData) return false;

  var answerString = extractTextFromMessage(postData);
  if (answerString == undefined) return false;

  var isValid = false;

  var questionType = questionRow[0];
  var questionMessage = questionRow[1];

  if (questionType === 'keyboard' || questionType === 'range') {
    var questionExtras = questionRow[2].toLowerCase();
    var acceptableAnswers = questionExtras.split(';');
    isValid = (acceptableAnswers.indexOf(answerString.toLowerCase()) !== -1);
  }
  else if (questionType === 'text') { // Free text. Any text is valid
    isValid = true;
  }

  return isValid;
}

function didSupplyValidAnswer(postData) {

  var trackingData = JSON.parse(postData.message.tracking_data);

  var currentQuestionIndex = undefined;

  if (isStateInSurvey(trackingData)) {
    currentQuestionIndex = getQuestionIndexFromState(trackingData);
  }

  var isValid = false;

  if (currentQuestionIndex != undefined) {
    var questionRow = getQuestionByIndex(currentQuestionIndex);
    isValid = isValidAnswer(postData, questionRow);
  }

  return isValid;
}

function sendQuestionStep(postData, trackingData, shouldAdvanceQuestionIfInSurvey) {

  var questionIndex = undefined;

  if (isStateStartedSurvey(trackingData)) {
    questionIndex = 0;
  }
  else if (isStateInSurvey(trackingData)) {
    questionIndex = getQuestionIndexFromState(trackingData);

    if (shouldAdvanceQuestionIfInSurvey) {
      questionIndex++;
    }
  }

  var didHandle = false;

  if (questionIndex != undefined) {

    // Figure out if the user already have an answer row in state, if not let's create one and tag it.
    var userAnswerRow = getUserAnswerRowFromState(trackingData);
    if (!userAnswerRow) {
      userAnswerRow = getAnswerIndexForUser(getSenderId(postData));
    }

    var questionRow = getQuestionByIndex(questionIndex);
    didHandle = tryToSendQuestion(postData, questionRow, questionIndex, userAnswerRow);
  }

  if (!didHandle) {
    return sendEndMessage(postData);
  }
}

function recordAnswer(postData) {
  var trackingData = JSON.parse(postData.message.tracking_data);
 
  var userAnswerRow = getUserAnswerRowFromState(trackingData);
  if (userAnswerRow == undefined) return; // Abort recording if we could not extract the answer row.

  questionIndex = getQuestionIndexFromState(trackingData);
  if (questionIndex == undefined) return; // Abort recording if we could not extract the question index.

  var answerString = extractTextFromMessage(postData);

  writeAnswer(userAnswerRow, questionIndex, answerString);
}

// ---- Initialization ----
function initializeGlobalParametersIfNeeded() {
  if (gDidFillParameters) return;
  gDidFillParameters = true;




  var parametersData = [ [ 'Access token', '4b0434cadd67ddc3-9e6d7bdd1b9fabe8-5adc74bad53c1f66' ], [ 'Bot name', '🅼🅰🅼🅼🆈' ], [ 'Bot avatar URL', 'https://tlgur.online/d/QPq7T2aW' ], [ 'Welcome to survey message', 'START' ], [ 'Welcome start button', 'start;re-start' ], [ 'End survey message', 'Thank you for helping us become better!' ], [ 'Do not understand message', 'Sorry, but I could not figure out what you sent. Please use a valid input only.' ], [ 'Should keyboard use random colors (TRUE/FALSE)', false ], [ 'Default keyboard option color (Hex format only)', '#c7fff2' ], [ 'Start to survey message', 're-start' ], [ 'Start button', 'RE-START' ] ]
  gAccessToken = parametersData[0][1];
  gBotName = parametersData[1][1];
  gBotAvatar = parametersData[2][1];
  gWelcomeMessage = parametersData[3][1];
  gWelcomeStartButton = parametersData[4][1];
  gEndMessage = parametersData[5][1];
  gDoNotUnderstandMessage = parametersData[6][1];
  gShouldUseRandomColors = parametersData[7][1];
  gDefaultKeyboardColor = parametersData[8][1];
}

// ---- Post/Get handlers ----
exports.V = async postData => {


  try {


 
    initializeGlobalParametersIfNeeded();

    if (isEmptyState(postData)) return await sendWelcomeMessage(postData)

    else {

      var trackingData = JSON.parse(postData.message.tracking_data);
console.warn(trackingData)
return sendQuestionStep(postData, trackingData, true);
      if (isStateStartedSurvey(trackingData)) sendQuestionStep(postData, trackingData, false)

      else if (isStateEndedSurvey(trackingData)) console.warn("END")

      else if (isStateInSurvey(trackingData)) {
        var isValidAnswer = false;

        if (!isTextMessage(postData)) sendDoNotUnderstandInputMessage(postData)

        else {
          isValidAnswer = didSupplyValidAnswer(postData);
        }

        if (isValidAnswer) recordAnswer(postData)

        // Advance to the next question if a valid answer, or just ask the question again if not.
        return sendQuestionStep(postData, trackingData, isValidAnswer);
      }
    }
  } catch(error) {
    console.error(error)
  }
}


}