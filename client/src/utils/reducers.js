import { useReducer } from "react";
import { Add_About,
ADD_Education,
ADD_Personal,
ADD_Project,
ADD_WorkExperience,
ADD_USER } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_Education:
      return {
        ...state,
        education: [...action.education],
      };

      case ADD_Personal: 
      return{
       ...state,
       resume: true,
       personal: action.personal,
      };

      case ADD_Project:
        return {
          ...state,
          project: [...action.project],
        };

        case ADD_WorkExperience:
          return {
            ...state,
            work: [...action.work],
          };

          case ADD_USER:
            return {
              ...state,
              resume: true,
              
            };

            case Add_About:
              return{
                ...state,
                resume: true,
                about: action.about,
              }
    default:
      return state;
  }
};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
