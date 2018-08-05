import TextService from '../services/textService'
const service = new TextService()

const initialState = {}

const textReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INIT-TEXTS': return transformToLookup(action.texts)
    default: return state
  }
}

const transformToLookup = textArray => {
  const textLookup = {}
  if(textArray == null) return textLookup
  
  textArray.forEach(text => {
    textLookup[text.Location] = text.Text
  })
  return textLookup
}

export const initTexts = () => {
  return async dispatch => {
    const texts = await service.getAll()

    dispatch({
      type: 'INIT-TEXTS',
      texts
    })
  }
}

export default textReducer