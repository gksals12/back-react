import { handleActions } from "redux-actions";

// state
const initialState = {
  jobs: {
    developer: {
      name: "홍길동",
      skills: ["React.js", "JS"]
    },
    planner: {
      name: "장보고",
      skills: ["excel", "figma"]
    }
  }
}

// reducer
const jobs = handleActions({

}, initialState)

export default jobs;