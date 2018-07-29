const initialState = {}

const textReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INIT-TEXTS': return transformToLookup(action.texts)
    default: return state;
  }
}

const transformToLookup = textArray => {
  const textLookup = {}
  textArray.forEach(text => {
    textLookup[text.Location] = text.Text
  });
  return textLookup
}

export const initTexts = (texts) => ({
  type: 'INIT-TEXTS',
  texts
})

export default textReducer